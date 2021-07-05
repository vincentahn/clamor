class User < ApplicationRecord
  validates :username, :email, :password_digest, :session_token, presence: true
  validates :username, :email, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  attr_reader :password
  after_initialize :ensure_session_token, :ensure_profile_photo

  has_one_attached :profile_photo

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)

    if user && user.is_password?(password)
      user
    else
      nil
    end
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token!
    self.session_token = generate_session_token
    self.save!
    self.session_token
  end

  private

  def generate_session_token
    session_token = SecureRandom.urlsafe_base64

    while User.find_by(session_token: session_token)
      session_token = SecureRandom.urlsafe_base64
    end

    session_token
  end

  def ensure_session_token
    self.session_token ||= generate_session_token
  end

  def ensure_profile_photo
    unless self.profile_photo.attached?
      image_path = __dir__ + "/../assets/images/default_profile_pic.jpg"

      self.profile_photo.attach(
        io: File.open(image_path), 
        filename: "default_profile_pic.jpg"
      )
    end
  end
end
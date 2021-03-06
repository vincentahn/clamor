class User < ApplicationRecord
  validates :username, :email, :password_digest, :session_token, :birthday, presence: true
  validates :username, :email, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  attr_reader :password
  after_initialize :ensure_session_token

  has_many :server_memberships,
    foreign_key: :user_id,
    class_name: 'ServerMembership',
    dependent: :destroy

  has_many :servers,
    through: :server_memberships,
    source: :server

  has_many :private_memberships,
    foreign_key: :user_id,
    class_name: 'PrivateMembership'
  
  has_many :private_channels,
    through: :private_memberships,
    source: :channel

  has_many :messages,
    foreign_key: :author_id,
    class_name: 'Message'

  has_one_attached :profile_photo

  def self.find_by_credentials(email, password)
    user = User.includes(
      :servers => [server_photo_attachment: :blob],
      profile_photo_attachment: :blob
    ).find_by(email: email)

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
end
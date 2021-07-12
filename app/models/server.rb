class Server < ApplicationRecord
  validates :name, :founder_id, presence: true

  after_create :add_default_text_channel

  belongs_to :founder,
    foreign_key: :founder_id,
    class_name: 'User'

  has_many :server_memberships,
    foreign_key: :server_id,
    class_name: 'ServerMembership'
  
  has_many :members,
    through: :server_memberships,
    source: :user

  has_many :text_channels,
    foreign_key: :server_id,
    class_name: 'TextChannel'

  has_one_attached :server_photo

  private
  
  def add_default_text_channel
    TextChannel.create!(
      name: "general",
      server_id: self.id
    )
  end
end
class Server < ApplicationRecord
  validates :name, :founder_id, presence: true

  belongs_to :founder,
    foreign_key: :founder_id,
    class_name: 'User'

  has_many :server_memberships,
    foreign_key: :server_id,
    class_name: 'ServerMembership'
  
  has_many :members,
    through: :server_memberships,
    source: :user

  has_one_attached :server_photo
end
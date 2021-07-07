class ServerMembership < ApplicationRecord
  validates :user_id, :server_id, presence: true

  belongs_to :users,
    foreign_key: :user_id,
    class_name: 'User'

  belongs_to :servers,
    foreign_key: :server_id,
    class_name: 'Server'
end
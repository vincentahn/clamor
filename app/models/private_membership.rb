class PrivateMembership < ApplicationRecord
  validates :user_id, :channel_id, presence: true

  belongs_to :user,
    foreign_key: :user_id,
    class_name: 'User'

  belongs_to :channel,
    foreign_key: :channel_id,
    class_name: 'PrivateChannel'
end
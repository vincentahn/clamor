class PrivateChannel < ApplicationRecord
  validates :name, presence: true

  has_many :private_memberships,
    foreign_key: :channel_id,
    class_name: 'PrivateMembership'

  has_many :users,
    through: :private_memberships,
    source: :user

  has_many :messages,
    as: :typeable,
    dependent: :destroy
end
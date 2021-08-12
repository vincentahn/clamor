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

  has_one_attached :channel_photo

  def self.getPrivateChannelByUser(current_user, otherUserId)
    channel = current_user.private_channels
      .joins(:users)
      .includes(:messages, users: [profile_photo_attachment: :blob])
      .find_by("users.id = ?", otherUserId)

    if channel
      channel
    else
      other_user = User.find(otherUserId)

      if other_user
        channel = PrivateChannel.create!(
          name: "#{current_user.username} and #{other_user.username}'s Private Channel"
        )
        
        PrivateMembership.create!(
          user_id: current_user.id,
          channel_id: channel.id
        )

        PrivateMembership.create!(
          user_id: otherUserId,
          channel_id: channel.id
        )

        channel
      else
        nil
      end
    end
  end
end
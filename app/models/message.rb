class Message < ApplicationRecord
  validates :body, :author_id, :typeable_id, :typeable_type, presence: true

  belongs_to :author,
    foreign_key: :author_id,
    class_name: 'User'

  belongs_to :typeable,
    polymorphic: true
end
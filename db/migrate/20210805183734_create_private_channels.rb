class CreatePrivateChannels < ActiveRecord::Migration[5.2]
  def change
    create_table :private_channels do |t|
      t.string :name, null: false

      t.timestamps
    end
    add_index :private_channels, :name

    create_table :private_memberships do |t|
      t.integer :user_id, null: false
      t.integer :channel_id, null: false

      t.timestamps
    end
    add_index :private_memberships, [:user_id, :channel_id]
  end
end

class RecreateNewServerMemberships < ActiveRecord::Migration[5.2]
  def change
    drop_table :server_memberships

    create_table :server_memberships do |t|
      t.integer :user_id, null: false
      t.integer :server_id, null: false

      t.timestamps
    end
    add_index :server_memberships, [:user_id, :server_id]
  end
end

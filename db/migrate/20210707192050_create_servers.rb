class CreateServers < ActiveRecord::Migration[5.2]
  def change
    create_table :servers do |t|
      t.string :name, null: false
      t.integer :founder_id, null: false

      t.timestamps
    end
    add_index :servers, [:name, :founder_id]

    create_join_table :users, :servers, table_name: :server_memberships
  end
end

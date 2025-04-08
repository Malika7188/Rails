class FixAdminColumn < ActiveRecord::Migration[7.0]
  def change
    # Check if column exists before modifying
    if column_exists?(:users, :admin)
      remove_column :users, :admin
    end
    
    add_column :users, :admin, :boolean, default: false
  end
end
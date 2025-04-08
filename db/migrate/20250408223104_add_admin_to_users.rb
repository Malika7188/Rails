class AddAdminToUsers < ActiveRecord::Migration[7.0]
  def change
    # Only add the column if it doesn't exist
    unless column_exists?(:users, :admin)
      add_column :users, :admin, :boolean, default: false
    end
  end
end
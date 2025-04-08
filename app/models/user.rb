class User < ApplicationRecord
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  # Your existing associations and validations
  has_many :locations
  enum :role, { user: 0, admin: 1 }, default: :user

  def make_admin
    update(admin: true)
  end

  def revoke_admin
    update(admin: false)
  end
end
module Admin
  class UsersController < ApplicationController
    before_action :authenticate_user!
    before_action :require_admin

    def index
      @users = User.all
      render inertia: 'Admin/Users/Index', props: {
        users: @users.as_json(only: [:id, :email, :admin, :created_at])
      }
    end

    def destroy
      user = User.find(params[:id])
      user.destroy
      redirect_to admin_users_path, notice: 'User deleted successfully'
    end

    def toggle_admin
      user = User.find(params[:id])
      user.admin? ? user.revoke_admin : user.make_admin
      redirect_to admin_users_path, notice: 'Admin status updated'
    end

    private

    def require_admin
      unless current_user.admin?
        redirect_to root_path, alert: 'Unauthorized access'
      end
    end
  end
end
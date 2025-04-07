class Admin::UsersController < ApplicationController
    before_action :authenticate_user!
    before_action :require_admin!
  
    def index
      @users = User.all
    end
  
    def destroy
      @user = User.find(params[:id])
      @user.destroy
      redirect_to admin_users_path, notice: 'User deleted successfully'
    end
  
    private
  
    def require_admin!
      return if current_user.admin?
  
      redirect_to root_path, alert: 'Unauthorized access!'
    end
  end
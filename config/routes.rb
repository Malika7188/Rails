Rails.application.routes.draw do
  devise_for :users

  # For authenticated users
  authenticated :user do
    root to: "dashboard#index", as: :authenticated_root
  end

  # For unauthenticated users
  root to: "dashboard#index"  # Shows dashboard to all users

  # Regular routes
  get "dashboard", to: "dashboard#index"
  get '/locations', to: 'locations#index'

  # Admin namespace routes
  namespace :admin do
    resources :users, only: [:index, :destroy] do
      post :toggle_admin, on: :member
    end
  end
end
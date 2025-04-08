Rails.application.routes.draw do
  devise_for :users

  # For authenticated users
  authenticated :user do
    root to: "dashboard#index", as: :authenticated_root
  end

  # For unauthenticated users (optional - could redirect to login)
  root to: "dashboard#index"  # Shows dashboard to all users
  # OR if you want to redirect to login:
  # root to: redirect("/users/sign_in")

  # Other routes
  get "dashboard", to: "dashboard#index"
  get '/locations', to: 'locations#index'
end
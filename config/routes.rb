# config/routes.rb
Rails.application.routes.draw do
  devise_for :users

  authenticated :user do
    root to: "dashboard#index", as: :authenticated_root
  end

  unauthenticated do
    root to: "home#index", as: :unauthenticated_root
  end

  # Optional: for admin dashboard or manual testing
  get "dashboard", to: "dashboard#index"
end

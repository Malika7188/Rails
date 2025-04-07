# config/routes.rb
Rails.application.routes.draw do
  devise_for :users

  # Make sure this line exists exactly like this:
  root to: "dashboard#index"  # This is your primary fix

  # Your other routes
  get "dashboard", to: "dashboard#index"
  get '/locations', to: 'locations#index'
end
# app/controllers/dashboard_controller.rb
class DashboardController < ApplicationController
  def index
    if user_signed_in?
      # Authenticated user view
      locations = Location.includes(:user).map do |loc|
        {
          name: loc.name,
          latitude: loc.latitude,
          longitude: loc.longitude,
          user_email: loc.user.email
        }
      end
      render inertia: 'Dashboard', props: { locations: locations }
    else
      # Unauthenticated user view
      render inertia: 'Guest', props: {}  # Create app/javascript/pages/Guest.jsx
    end
  end
end
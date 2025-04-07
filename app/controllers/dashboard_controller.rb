class DashboardController < ApplicationController
    def index
        Rails.logger.info ">>> Dashboard#index HIT"
      
        locations = Location.includes(:user).map do |loc|
          {
            name: loc.name,
            latitude: loc.latitude,
            longitude: loc.longitude
          }
        end
      
        render inertia: 'Dashboard', props: { locations: locations }
      end
      
end

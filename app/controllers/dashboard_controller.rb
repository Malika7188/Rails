class DashboardController < ApplicationController
  before_action :authenticate_user!

  def index
    @locations = current_user.locations
    render inertia: 'Dashboard', props: {
      locations: @locations.as_json(only: [:id, :name, :latitude, :longitude])
    }
  end
end
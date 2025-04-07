# app/controllers/locations_controller.rb
class LocationsController < ApplicationController
    before_action :authenticate_user!
  
    def index
      @locations = Location.all
      render json: @locations.as_json(only: [:id, :name], methods: [:latitude, :longitude])
    end
  
    def create
      @location = current_user.locations.create!(location_params)
      redirect_to root_path, notice: 'Location added successfully'
    end
  
    private
  
    def location_params
      params.require(:location).permit(:name, :latitude, :longitude)
    end
  end
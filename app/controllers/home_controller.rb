# app/controllers/home_controller.rb
class HomeController < ApplicationController
    def index
      @locations = Location.all
      render inertia: 'Home', props: {
        locations: @locations.as_json(only: [:id, :name, :latitude, :longitude])
      }
    end
  end
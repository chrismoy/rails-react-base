class Api::V1::PlacesController < ApplicationController 
  before_action :set_place, only: [:show]

  def index
    @places = Place.all.limit(10)
    respond_with @places
  end

  def show
    respond_with @place
  end

  private

    def place_params
      params.require(:place).permit(:name, :yelp_id)
    end

    def set_place
      @place = Place.find(params[:id])
    end
end

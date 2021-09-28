class Api::PackagesController < ApplicationController
  
  def index
    get_by_trkNum()
  end

  def show
  end

  def get_by_trkNum()
    @package = Package.where(tracking_number: params[:tracking_number])
    render json: @package
  end


  def get_package(id)
  end

  def package_params
    params.permit(:tracking_number, :id)
  end
  
end

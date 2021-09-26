class Api::PackagesController < ApplicationController
  
  def index
    @package = Package.find_by(params[:id])
  end

  def show
    render :json => {
      package: get_package(params[:id])
    }
  end

  def get_package(id)
    @package = Package.find_by(id:id)
    @package
  end
  
end
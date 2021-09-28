class Api::PackagesController < ApplicationController
  
  def index
    
  end
  
  def show
  end
  
  def get_pkg_by_trkNum()
    render :json => {
      package: get_by_trk(params[:tracking_number])
    } 
  end

  def get_by_trk(trkNum)
    @package = Package.where(tracking_number: trkNum)
    @package
  end

  private

  def package_params
    params.permit(:tracking_number, :id)
  end
  
end

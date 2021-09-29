class Api::PackagesController < ApplicationController
  
  def get_pkg_by_trkNum()
    @package = Package.where(tracking_number: params[:tracking_number])
    render json: @package
  end

  def destroy
    @package.destroy
  end

  private

  def package_params
    params.permit(:tracking_number, :id)
  end
  
end

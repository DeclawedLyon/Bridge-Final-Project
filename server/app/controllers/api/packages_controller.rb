class Api::PackagesController < ApplicationController

  def index
    @packages = Package.where(active: true)

    render json: @packages
  end
   
  def get_pkg_by_nickname 
    @package = Package.where(nickname: params[:nickname])
    render json: @package
  end


  def get_pkg_by_trkNum()
    @package = Package.where(tracking_number: params[:tracking_number])
    render json: @package
  end

  def add_item
    Package.create(
    tracking_number: params[:tracking_number],
    username: 'Geo789',
    courier: '1',
    date_sent: '2021-09-07',
    date_delivered: '2021-09-08',
    last_known_status: 'DE',
    signed_for: 'N/A',
    sent_to: 'Elizabeth Ducksworth',
    sent_from: 'Almond Grove',
    description: params[:description],
    estimated_delivery: 'N/A',
    from_st: '4444 los feliz ave',
    from_city_province: 'London, ON',
    from_post: 'T84 V7N',
    to_st: '33 Ashway Crescent',
    to_city_province: 'Nanaimo, BC',
    to_post: 'V9F 7K7',
    nickname: params[:nickname])
  end

  def deliver
    @package = Package.find_by(id: params[:id])
    @package.update(last_known_status: 'DE')
    @package.save
  end

  def clear
    @package = Package.find_by(id: params[:id])
    @package.update(last_known_status: 'OF')
    @package.save
  end

  def remove
    @package = Package.find_by(id: params[:id])
    @package.update(active: false)
    @package.save
  end


  # DELETE /packages/1
  def destroy
    @package = Package.where(id: params[:id])
    @package.destroy
  end

  private

  def package_params
    params.permit(:tracking_number, :id, :nickname, :description, :active)
  end
  
end


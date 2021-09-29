class Api::CouriersController < ApplicationController
  
  def index
    @courier = Courier.find_by(params[:id])
  end

  def show
    render :json => {
      courier: get_courier(params[:id])
    }  
  end

  def get_courier(id)
    @courier = Courier.find_by(id:id)
    @courier
  end

end

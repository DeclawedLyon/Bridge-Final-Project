class Api::UsersController < ApplicationController
  
  def index
    @user = User.find_by(params[:id])
  end

  def show
    render :json => {
      user: get_user(params[:id])
    }  
  end

  def get_user(id)
    @user = User.find_by(id:id)
    @user
  end

end
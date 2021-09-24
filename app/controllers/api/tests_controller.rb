class Api::TestsController < ApplicationController
  def index
    render :json => {
      message: "hello!"
    }
  end

  def practice
    render :json => {
      phrase: "AWE SHOOT"
    }
  end
end
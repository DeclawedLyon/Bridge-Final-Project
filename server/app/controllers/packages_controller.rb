class PackagesController < ApplicationController
  before_action :set_package, only: [:show, :update, :destroy]

  # GET /packages
  def index
    @packages = Package.all

    render json: @packages
  end

  # GET /packages/1
  def show
    render json: @package
  end

  # POST /packages
  def create
    @package = Package.new(package_params)

    if @package.save
      render json: @package, status: :created, location: @package
    else
      render json: @package.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /packages/1
  def update
    if @package.update(package_params)
      render json: @package
    else
      render json: @package.errors, status: :unprocessable_entity
    end
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


  # DELETE /packages/1
  def destroy
    # @package = Package.where(id: params[:id])
    @package.destroy
  end


  private
    # Use callbacks to share common setup or constraints between actions.
    def set_package
      @package = Package.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def package_params
      params.permit(:id :tracking_number, :description, :nickname)
      params.fetch(:package, {})
    end
end

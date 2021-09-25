class PackagesController < ApplicationController
  def index
    @packages = Package.all.order
end
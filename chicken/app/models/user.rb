class User < ApplicationRecord
  has_many :tracking_instances
  has_many :packages, through: :tracking_instances
end

 

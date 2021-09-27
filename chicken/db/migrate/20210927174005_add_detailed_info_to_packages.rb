class AddDetailedInfoToPackages < ActiveRecord::Migration[5.2]
  def change
    add_column :packages, :estimated_delivery, :datetime
    add_column :packages, :from_st, :string
    add_column :packages, :from_city_province, :string
    add_column :packages, :from_post, :string
    add_column :packages, :to_st, :string
    add_column :packages, :to_city_province, :string
    add_column :packages, :to_post, :string
    add_column :packages, :nickname, :string
  end
end

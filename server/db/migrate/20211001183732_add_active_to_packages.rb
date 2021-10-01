class AddActiveToPackages < ActiveRecord::Migration[5.2]
  def change
    add_column :packages, :active, :boolean
  end
end

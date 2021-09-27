class CreateCouriers < ActiveRecord::Migration[5.2]
  def change
    create_table :couriers do |t|
      t.string :name
      t.string :code
      t.string :base_url

      t.timestamps
    end
  end
end

class CreateTrackingInstances < ActiveRecord::Migration[5.2]
  def change
    create_table :tracking_instances do |t|

      t.timestamps
    end
  end
end

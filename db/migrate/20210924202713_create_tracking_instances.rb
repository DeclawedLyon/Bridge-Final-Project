class CreateTrackingInstances < ActiveRecord::Migration[5.2]
  def change
    create_table :tracking_instances do |t|
      t.references :package, foreign_key: true
      t.references :user, foreign_key: true
      t.references :courier, foreign_key: true

      t.timestamps
    end
  end
end

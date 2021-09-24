class CreatePackages < ActiveRecord::Migration[5.2]
  def change
    create_table :packages do |t|
      t.string :tracking_number
      t.string :courier
      t.datetime :date_sent
      t.datetime :date_delivered
      t.string :last_known_status
      t.string :signed_for
      t.string :sent_to
      t.string :sent_from
      t.string :description

      t.timestamps
    end
  end
end

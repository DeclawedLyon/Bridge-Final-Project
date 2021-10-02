class AddIsPriorityToPackages < ActiveRecord::Migration[5.2]
  def change
    add_column :packages, :is_priority, :boolean
  end
end

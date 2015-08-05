class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.string :name, null: false
      t.integer :current_rate, default: 0
      t.datetime :start
      t.datetime :stop

      t.timestamps null: false
    end
  end
end

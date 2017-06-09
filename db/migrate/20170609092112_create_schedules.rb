class CreateSchedules < ActiveRecord::Migration[5.0]
  def change
    create_table :schedules do |t|
      t.string :title
      t.string :date_range
      t.datetime :start
      t.datetime :end

      t.timestamps
    end
  end
end

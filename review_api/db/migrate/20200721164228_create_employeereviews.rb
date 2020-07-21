class CreateEmployeereviews < ActiveRecord::Migration[6.0]
  def change
    create_table :employeereviews do |t|
      t.string :name
      t.string :title
      t.string :team
      t.string :score
      t.string :feedback

      t.timestamps
    end
  end
end

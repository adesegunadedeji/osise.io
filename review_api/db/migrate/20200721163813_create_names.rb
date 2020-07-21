class CreateNames < ActiveRecord::Migration[6.0]
  def change
    create_table :names do |t|
      t.string :title
      t.string :team
      t.string :score
      t.string :feedback

      t.timestamps
    end
  end
end

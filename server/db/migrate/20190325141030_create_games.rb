class CreateGames < ActiveRecord::Migration[5.2]
  def change
    create_table :games do |t|
      t.references :hero, foreign_key: true
      t.references :villain, foreign_key: true

      t.timestamps
    end
  end
end

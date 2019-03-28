class CreateHeros < ActiveRecord::Migration[5.2]
  def change
    create_table :heros do |t|
      t.string :name
      t.integer :fast_attack
      t.integer :heavy_attack
      t.integer :speed
      t.integer :strength
      t.integer :hit_points
      t.string :img_url
      t.integer :score

      t.timestamps
    end
  end
end

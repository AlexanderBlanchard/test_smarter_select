class CreateMovieCasts < ActiveRecord::Migration[7.1]
  def change
    return if table_exists?(:movie_cast)

    create_table :movie_cast do |t|
      t.references :movie, null: false, foreign_key: true
      t.references :person, null: false, foreign_key: true
      t.references :gender, null: false, foreign_key: true
      t.string :character_name
      t.integer :cast_order

      t.timestamps
    end
  end
end

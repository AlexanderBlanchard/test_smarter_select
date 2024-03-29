class CreateMovieGenres < ActiveRecord::Migration[7.1]
  def change
    return if table_exists?(:movie_genres)

    create_table :movie_genres do |t|
      t.references :movie, null: false, foreign_key: true
      t.references :genre, null: false, foreign_key: true

      t.timestamps
    end
  end
end

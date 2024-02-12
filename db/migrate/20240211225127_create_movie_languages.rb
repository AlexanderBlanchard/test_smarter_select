class CreateMovieLanguages < ActiveRecord::Migration[7.1]
  def change
    return if table_exists?(:movie_languages)

    create_table :movie_languages do |t|
      t.references :movie, null: false, foreign_key: true
      t.references :language, null: false, foreign_key: true
      t.references :language_role, null: false, foreign_key: true

      t.timestamps
    end
  end
end

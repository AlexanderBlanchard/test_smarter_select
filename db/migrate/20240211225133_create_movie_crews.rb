class CreateMovieCrews < ActiveRecord::Migration[7.1]
  def change
    return if table_exists?(:movie_crew)

    create_table :movie_crew do |t|
      t.references :movie, null: false, foreign_key: true
      t.references :person, null: false, foreign_key: true
      t.references :department, null: false, foreign_key: true
      t.string :job

      t.timestamps
    end
  end
end

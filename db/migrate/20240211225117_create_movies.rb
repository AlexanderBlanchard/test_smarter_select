class CreateMovies < ActiveRecord::Migration[7.1]
  def change
    return if table_exists?(:movie)

    create_table :movie do |t|
      t.string :title
      t.decimal :budget
      t.string :homepage
      t.text :overview
      t.decimal :popularity
      t.date :release_date
      t.decimal :revenue
      t.integer :runtime
      t.string :movie_status
      t.string :tagline
      t.decimal :votes_avg
      t.integer :votes_count

      t.timestamps
    end
  end
end

class CreateMovieCompanies < ActiveRecord::Migration[7.1]
  def change
    return if table_exists?(:movie_company)

    create_table :movie_company do |t|
      t.references :movie, null: false, foreign_key: true
      t.references :production_company, null: false, foreign_key: true

      t.timestamps
    end
  end
end

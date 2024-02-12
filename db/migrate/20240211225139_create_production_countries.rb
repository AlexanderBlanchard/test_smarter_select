class CreateProductionCountries < ActiveRecord::Migration[7.1]
  def change
    return if table_exists?(:production_country)

    create_table :production_country do |t|
      t.references :movie, null: false, foreign_key: true
      t.references :country, null: false, foreign_key: true

      t.timestamps
    end
  end
end

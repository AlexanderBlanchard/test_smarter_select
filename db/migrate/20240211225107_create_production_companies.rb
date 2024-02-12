class CreateProductionCompanies < ActiveRecord::Migration[7.1]
  def change
    return if table_exists?(:production_company)

    create_table :production_company do |t|
      t.string :company_name

      t.timestamps
    end
  end
end

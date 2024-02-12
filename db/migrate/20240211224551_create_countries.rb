# frozen_string_literal: true

class CreateCountries < ActiveRecord::Migration[7.1]
  def change
    # According to sql file and ER Diagram the name will be Country instead of countries like rails conventions
    return if table_exists?(:country)

    create_table :country do |t|
      t.string :country_iso_code
      t.string :country_name

      t.timestamps
    end
  end
end

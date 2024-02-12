class ProductionCountry < ApplicationRecord
  self.table_name = 'production_country'
  belongs_to :movie
  belongs_to :country
end

class ProductionCompany < ApplicationRecord
  self.table_name = 'production_company'

  has_many :movie_companies, foreign_key: 'company_id'
  has_many :movies, through: :movie_companies
end

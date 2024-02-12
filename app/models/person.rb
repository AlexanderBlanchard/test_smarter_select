class Person < ApplicationRecord
  self.table_name = 'person'

  has_many :movie_casts, foreign_key: 'person_id'
  has_many :movies, through: :movie_casts
end

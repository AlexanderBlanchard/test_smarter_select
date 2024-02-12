class Keyword < ApplicationRecord
  self.table_name = 'keyword'

  has_many :movie_keywords, foreign_key: 'keyword_id'
  has_many :movies, through: :movie_keywords
end

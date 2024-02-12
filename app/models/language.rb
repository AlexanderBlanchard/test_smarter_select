class Language < ApplicationRecord
  self.table_name = 'language'

  has_many :movie_languages, foreign_key: 'language_id'
  has_many :movies, through: :movie_languages
end

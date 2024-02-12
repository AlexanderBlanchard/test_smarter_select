class Genre < ApplicationRecord
  self.table_name = 'genre'
  has_many :movie_genres, foreign_key: 'genre_id'
  has_many :movies, through: :movie_genres
end

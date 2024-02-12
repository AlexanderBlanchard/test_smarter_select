class MovieCast < ApplicationRecord
  self.table_name = 'movie_cast'
  belongs_to :movie
  belongs_to :person
  belongs_to :gender
end

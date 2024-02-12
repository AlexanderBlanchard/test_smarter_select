class MovieCrew < ApplicationRecord
  self.table_name = 'movie_crew'
  belongs_to :movie
  belongs_to :person
  belongs_to :department
end

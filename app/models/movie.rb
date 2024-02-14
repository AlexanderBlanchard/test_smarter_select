# frozen_string_literal: true

class Movie < ApplicationRecord
  self.table_name = 'movie'

  has_many :movie_genres, dependent: :destroy
  has_many :genres, through: :movie_genres

  has_many :movie_casts, dependent: :destroy
  has_many :cast_members, through: :movie_casts, source: :person

  has_many :movie_companies, dependent: :destroy
  has_many :production_companies, through: :movie_companies, source: :production_company

  has_many :production_country, dependent: :destroy
  has_many :movie_country, through: :production_country, source: :country

  has_many :movie_keywords, dependent: :destroy
  has_many :keywords, through: :movie_keywords

  has_many :movie_languages, dependent: :destroy
  has_many :languages, through: :movie_languages
end

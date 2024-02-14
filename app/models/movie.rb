class Movie < ApplicationRecord
  self.table_name = 'movie'

  # Asociación con géneros a través de la tabla de unión movie_genres
  has_many :movie_genres, foreign_key: 'movie_id'
  has_many :genres, through: :movie_genres

  # Asociación con miembros del elenco a través de la tabla de unión movie_cast
  has_many :movie_casts, foreign_key: 'movie_id'
  has_many :cast_members, through: :movie_casts, source: :person

  # Asociación con compañías de producción a través de la tabla de unión movie_company
  has_many :movie_companies, foreign_key: 'movie_id'
  has_many :production_companies, through: :movie_companies, source: :production_company

  has_many :production_country, foreign_key: 'movie_id'
  has_many :movie_country, through: :production_country, source: :country

  # Asociación con palabras clave a través de la tabla de unión movie_keywords
  has_many :movie_keywords, foreign_key: 'movie_id'
  has_many :keywords, through: :movie_keywords

  # Asociación con idiomas a través de la tabla de unión movie_languages
  has_many :movie_languages, foreign_key: 'movie_id'
  has_many :languages, through: :movie_languages
end

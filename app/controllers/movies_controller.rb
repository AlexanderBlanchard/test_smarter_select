class MoviesController < ApplicationController
  require 'will_paginate/array'

  def index
    @greeting = 'Hola'
    @movies = Movie.includes(:genres, :cast_members, :production_companies, :keywords, :languages)
                   .limit(2)
                   .map do |movie|
      {
        id: movie.id,
        name: movie.title,
        genres: movie.genres.map(&:genre_name),
        languages: movie.languages.map(&:language_name),
        keywords: movie.keywords.map(&:keyword_name),
        company: movie.production_companies.map(&:company_name).join(', '),
        cast: movie.cast_members.map { |person| person.person_name }
      }
    end

    puts @movies.inspect
  end
end

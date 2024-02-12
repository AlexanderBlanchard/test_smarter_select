class MoviesController < ApplicationController
  require 'will_paginate/array'

  def index
    @greeting = 'Hola'
  end

  def obtain_movies
    movies = Movie.includes(:genres, :cast_members, :production_companies, :keywords, :languages)
                  .paginate(page: params[:page], per_page: 5)
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

    total_pages = (Movie.count / 5.0).ceil
    render json: { movies:, total_pages: }
  end
end

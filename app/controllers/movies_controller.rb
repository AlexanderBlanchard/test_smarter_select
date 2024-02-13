class MoviesController < ApplicationController
  require 'will_paginate/array'

  def index
    @greeting = 'Hola'
  end

  def obtain_movies
    parameters = params.slice(:name, :genre, :language, :cast_name, :page, :per_page)
    result = Movies::ListMoviesUseCase.call(parameters)

    puts result[:payload]
    render(json: result[:payload])
  end

  private

  def calculate_total_pages
    (Movie.count / (params[:per_page] || 10).to_f).ceil
  end

end

# frozen_string_literal: true

class MoviesController < ApplicationController
  require 'will_paginate/array'

  def index
    @greeting = 'Hola'
  end

  def obtain_movies
    parameters = movies_filter_params
    result = Movies::ListMoviesUseCase.call(parameters)
    render(json: result[:payload])
  end

  private

  def calculate_total_pages
    (Movie.count / (params[:per_page] || 10).to_f).ceil
  end

  def movies_filter_params
    params.permit(:page, :per_page, :name, :genre, :language, :cast_name)
  end
end

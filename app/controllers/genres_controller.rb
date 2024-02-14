# frozen_string_literal: true

class GenresController < ApplicationController
  def obtain_genres
    genres = Genre.all
    render(json: genres)
  end
end

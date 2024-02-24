# frozen_string_literal: true

class GenresController < ApplicationController
  def obtain_genres
    genres =
      Rails.cache.fetch('genres', expires_in: 12.hours) do
        Genre.all.to_a
      end
    render(json: genres)
  end
end

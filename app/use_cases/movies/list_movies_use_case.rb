# app/use_cases/list_movies_use_case.rb
module Movies
  class ListMoviesUseCase < ApplicationUseCase
    def initialize(params)
      @params = params
    end

    def call
      response(success: true, payload: list)
    rescue => error
      response(error:, payload: { message: error.message })
    end

    attr_accessor :params
    
    private

    def list
      movies_query = obtain_movies
      formatted_data = process_movies(movies_query)
      json_response(formatted_data, movies_query.total_entries, movies_query.total_pages)
    end

    def obtain_movies
      response = Movies::MoviesQuery.call(@params)
      raise(response[:error]) if response[:success?] == false

      response[:payload]
    end

    def process_movies(movies_query)
      mo = movies_query.map do |movie|
        {
          id: movie.id,
          name: movie.title,
          genres: movie.genres.map(&:genre_name),
          languages: movie.languages.map(&:language_name),
          keywords: movie.keywords.map(&:keyword_name),
          cast: movie.cast_members.map { |person| person.person_name }
        }
      end

    end

    def json_response(movies_data, total_entries, total_pages)
      {
        movies: movies_data,
        total: total_entries,
        total_pages:
      }
    end

  end
end
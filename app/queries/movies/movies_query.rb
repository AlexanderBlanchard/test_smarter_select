# frozen_string_literal: true

module Movies
  class MoviesQuery < ApplicationQuery
    def initialize(params = {})
      super()
      @params = params
    end

    def call
      cache_key = build_cache_key(@params)
      cached_result =
        Rails.cache.fetch(cache_key, expires_in: 12.hours) do
          query_movies
        end

      response(success: true, payload: cached_result)
    rescue => error
      response(error:)
    end

    def query_movies
      movies = Movie.all
      movies = filter_by_name(movies, @params[:name]) if @params[:name].present?
      movies = filter_by_genre(movies, @params[:genre_id]) if @params[:genre_id].present?
      movies = filter_by_language(movies, @params[:language_id]) if @params[:language_id].present?
      movies = filter_by_cast_name(movies, @params[:cast_name]) if @params[:cast_name].present?
      paginate_movies(movies)
    end

    private

    def build_cache_key(params)
      "movies_query:#{params.to_json}"
    end

    def filter_by_name(movies, name)
      movies.where('title ILIKE ?', "%#{name}%")
    end

    def filter_by_genre(movies, genre_id)
      genre_movie_ids = MovieGenre.where(genre_id:).select(:movie_id)
      movies.where(movie_id: genre_movie_ids)
    end

    def filter_by_language(movies, language_id)
      language_movie_ids = MovieLanguage.where(language_id:).select(:movie_id)
      movies.where(movie_id: language_movie_ids)
    end

    def filter_by_cast_name(movies, cast_name)
      cast_member_ids = Person.where('person_name ILIKE ?', "%#{cast_name}%").select(:person_id)
      cast_movie_ids = MovieCast.where(person_id: cast_member_ids).select(:movie_id)
      movies.where(movie_id: cast_movie_ids)
    end

    def paginate_movies(movies)
      page = @params[:page] || 1
      per_page = @params[:per_page] || 5
      movies.paginate(page:, per_page:)
    end
  end
end

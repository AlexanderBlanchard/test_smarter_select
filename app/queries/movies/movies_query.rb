module Movies
  class MoviesQuery < ApplicationQuery
    def initialize(params = {})
      @params = params
    end

    def call
      response(success: true, payload: query_movies)
    rescue => error
      response(error:)
    end

    def query_movies
      movies = Movie.includes(:genres, :cast_members, :languages, :keywords)
      movies = filter_by_name(movies, @params[:name]) if @params[:name].present?
      movies = filter_by_genre(movies, @params[:genre]) if @params[:genre].present?
      movies = filter_by_language(movies, @params[:language]) if @params[:language].present?
      movies = filter_by_cast_name(movies, @params[:cast_name]) if @params[:cast_name].present?
      paginate_movies(movies)
    end

    private

    def filter_by_name(movies, name)
      movies.where('title ILIKE ?', "%#{name}%")
    end

    def filter_by_genre(movies, genre)
      movies.joins(:genres).where(genres: { genre_name: genre })
    end

    def filter_by_language(movies, language)
      movies.joins(:languages).where(languages: { language_name: language })
    end

    def filter_by_cast_name(movies, cast_name)
      movies.joins(:cast_members).where('cast_members.person_name ILIKE ?', "%#{cast_name}%")
    end

    def paginate_movies(movies)
      page = @params[:page] || 1
      per_page = @params[:per_page] || 5
      movies.paginate(page: page, per_page: per_page)
    end
  end
end

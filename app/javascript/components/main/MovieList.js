import React, { useState, useEffect } from "react"
import axios from "axios"
import MovieCard from "./MovieCard"
import Pagination from "../pagination/Pagination"
import Spinner from "../utils/Spiner"
import MovieDetail from "./MovieDetail"

const MovieList = () => {
  const [genres, setGenres] = useState([])
  const [languages, setLanguages] = useState([])

  const [showDetail, setShowDetail] = useState(false)
  const [selectedMovie, setSelectedMovie] = useState(null)

  const [movies, setMovies] = useState([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [filters, setFilters] = useState({
    name: "",
    genre: "",
    language: "",
    cast_name: "",
  })

  useEffect(() => {
    if (!showDetail) {
      fetchMovies()
      fetchGenres()
      fetchLanguages()
    }
  }, [page, showDetail])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFilters({
      ...filters,
      [name]: value,
    })
  }

  const handleFilterChange = (e) => {
    const { name, value } = e.target
    setFilters((prev) => ({ ...prev, [name]: value }))
  }

  const handleMovieSelect = (movie) => {
    setSelectedMovie(movie)
    setShowDetail(true)
  }

  const handleBackToList = () => {
    setSelectedMovie(null)
    setShowDetail(false)
  }

  const applyFilters = () => {
    setPage(1)
    fetchMovies()
  }

  const fetchLanguages = () => {
    axios
      .get("/languages/obtain_languages")
      .then((response) => {
        setLanguages(response.data)
      })
      .catch((error) => console.error("Error fetching languages:", error))
  }

  const fetchGenres = () => {
    axios
      .get("/genres/obtain_genres")
      .then((response) => {
        setGenres(response.data)
      })
      .catch((error) => console.error("Error fetching genres:", error))
  }

  const fetchMovies = () => {
    setIsLoading(true)
    const queryParams = new URLSearchParams({
      ...filters,
      page,
    }).toString()

    axios
      .get(`/movies/obtain_movies?${queryParams}`)
      .then((response) => {
        setMovies(response.data.movies)
        setTotalPages(response.data.total_pages)
      })
      .catch((error) => console.error("Error fetching movies:", error))
      .finally(() => setIsLoading(false))
  }

  return (
    <div className='container mx-auto p-4 mt-8 bg-white shadow-lg rounded-lg border border-gray-200'>
      <h1 className='text-4xl font-bold text-center mb-6'>Movie List</h1>

      {/* Condicionalmente renderiza los filtros solo si showDetail es falso */}
      {!showDetail && (
        <div className='mb-6 flex flex-wrap gap-2 justify-center'>
          <input
            className='input border rounded py-2 px-3 text-grey-darker'
            type='text'
            name='name'
            value={filters.name}
            onChange={handleInputChange}
            placeholder='Filter by movie name'
          />

          <select
            className='border border-gray-300 rounded-md py-2 px-4 text-gray-700 bg-white w-1/5 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50'
            name='genre'
            value={filters.genre}
            onChange={handleFilterChange}
          >
            <option value=''>Select a genre</option>
            {genres.map((genre) => (
              <option key={genre.id} value={genre.genre_name}>
                {genre.genre_name}
              </option>
            ))}
          </select>

          <select
            className='border border-gray-300 rounded-md py-2 px-4 text-gray-700 bg-white w-1/5 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50'
            name='language'
            value={filters.language}
            onChange={handleFilterChange}
          >
            <option value=''>Select a language</option>
            {languages.map((language) => (
              <option key={language.id} value={language.language_name}>
                {language.language_name}
              </option>
            ))}
          </select>

          <input
            className='input border rounded py-2 px-3 text-grey-darker'
            type='text'
            name='cast_name'
            value={filters.cast_name}
            onChange={handleInputChange}
            placeholder='Filter by cast name'
          />
          <button
            className='btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
            onClick={applyFilters}
          >
            Apply Filters
          </button>
        </div>
      )}

      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {!showDetail ? (
            movies.length > 0 ? (
              // Render movies if any
              <div className='grid grid-cols-1 gap-4 overflow-y-auto max-h-[60vh] '>
                {movies.map((movie, index) => (
                  <div
                    key={`${movie.id}-${index}`}
                    onClick={() => handleMovieSelect(movie)}
                  >
                    <MovieCard movie={movie} />
                  </div>
                ))}
              </div>
            ) : (
              <div className='w-full bg-gray-200 flex justify-center items-center overflow-hidden'>
                <div className='w-full md:w-full flex flex-col justify-center items-center h-full bg-gray-200 p-4'>
                  <i className='fas fa-film fa-5x text-gray-500 mb-4'></i>
                  <span className='text-gray-500 text-xl'>
                    No results found
                  </span>
                </div>
              </div>
            )
          ) : (
            <MovieDetail movie={selectedMovie} onBack={handleBackToList} />
          )}

          {/* Condicionalmente renderiza la paginación solo si showDetail es falso */}
          {!showDetail && (
            <Pagination
              page={page}
              totalPages={totalPages}
              onPageChange={setPage}
            />
          )}
        </>
      )}
    </div>
  )
}

export default MovieList

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';
import Pagination from '../pagination/Pagination';
import Spinner from '../utils/Spiner';

const MovieList = () => {

  const [genres, setGenres] = useState([]);
  const [languages, setLanguages] = useState([]);

  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [filters, setFilters] = useState({
    name: '',
    genre: '',
    language: '',
    cast_name: ''
  });

  useEffect(() => {
    fetchMovies();
    fetchGenres();
    fetchLanguages();
  }, [page]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value
    });
  };

  const handleFilterChange = e => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };


  const applyFilters = () => {
    setPage(1);
    fetchMovies();
  };

  const fetchLanguages = () => {
    axios.get('/languages/obtain_languages')
      .then(response => {
        setLanguages(response.data);
      })
      .catch(error => console.error('Error fetching languages:', error));
  };

  const fetchGenres = () => {
    axios.get('/genres/obtain_genres')
      .then(response => {
        setGenres(response.data);
      })
      .catch(error => console.error('Error fetching genres:', error));
  };

  const fetchMovies = () => {
    setIsLoading(true);
    const queryParams = new URLSearchParams({
      ...filters,
      page
    }).toString();

    axios.get(`/movies/obtain_movies?${queryParams}`)
      .then(response => {
        setMovies(response.data.movies);
        setTotalPages(response.data.total_pages);
      })
      .catch(error => console.error('Error fetching movies:', error))
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="container mx-auto p-4 mt-8 bg-white shadow-lg rounded-lg border border-gray-200">
      <h1 className="text-4xl font-bold text-center mb-6">Movie List</h1>
      
      {/* Filters */}
      <div className="mb-6 flex flex-wrap gap-2 justify-center">
        <input className="input border rounded py-2 px-3 text-grey-darker" type="text" name="name" value={filters.name} onChange={handleInputChange} placeholder="Filter by movie name" />
        <select
          className="border border-gray-300 rounded-md py-2 px-4 text-gray-700 bg-white w-1/5 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          name="genre"
          value={filters.genre}
          onChange={handleFilterChange}
        >
          <option value="">Select a genre</option>
          {genres.map(genre => (
            <option key={genre.id} value={genre.genre_name}>{genre.genre_name}</option>
          ))}
        </select>
        <select
          className="border border-gray-300 rounded-md py-2 px-4 text-gray-700 bg-white w-1/5 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          name="language"
          value={filters.language}
          onChange={handleFilterChange}
        >
          <option value="">Select a language</option>
          {languages.map(language => (
            <option key={language.id} value={language.language_name}>{language.language_name}</option>
          ))}
        </select>


        <input className="input border rounded py-2 px-3 text-grey-darker" type="text" name="cast_name" value={filters.cast_name} onChange={handleInputChange} placeholder="Filter by cast name" />
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors" onClick={applyFilters}>Apply Filters</button>
      </div>
      
      {isLoading ? <Spinner /> :
        <>
         <div className="grid grid-cols-1 gap-4">
            {movies.map((movie, index) => (
              <MovieCard key={`${movie.id}-${index}`} movie={movie} />
            ))}
          </div>
          <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
        </>
      }
    </div>
  );
};

export default MovieList;

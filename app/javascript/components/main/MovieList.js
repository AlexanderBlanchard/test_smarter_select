import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';
import Pagination from '../pagination/Pagination'; // Asegúrate de que la ruta sea correcta

const MovieList = ({ initialMovies }) => {
  const [movies, setMovies] = useState(initialMovies || []);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    fetchMovies(page);
  }, [page]);

  const fetchMovies = (page) => {
    axios.get(`/movies/obtain_movies?page=${page}`)
      .then(response => {
        setMovies(response.data.movies);
        setTotalPages(response.data.total_pages);
      })
      .catch(error => {
        console.error('Error fetching movies:', error);
      });
  };
  
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold text-center mb-6">Smarter Select Test</h1>
      {/* Aquí puedes añadir tu filtro de búsqueda si es necesario */}
      <div className="grid grid-cols-1 gap-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <Pagination
        page={page}
        totalPages={totalPages}
        onPageChange={(newPage) => {
          setPage(newPage);
        }}
      />
    </div>
  );
};

export default MovieList;

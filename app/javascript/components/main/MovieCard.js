import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out flex flex-row max-h-80">
      {/* Poster Column */}
      <div className="w-1/3 bg-gray-200 flex justify-center items-center overflow-hidden">
        <div className="text-xl font-semibold text-gray-800">Poster</div>
      </div>

      {/* Movie Info Column */}
      <div className="w-1/3 p-4 flex flex-col justify-between">
        <div>
          <h2 className="font-bold text-lg mb-2">{movie.name}</h2>
          <p className="text-sm text-gray-600 mb-2">Genres: {movie.genres.join(', ')}</p>
          <p className="text-sm text-gray-600 mb-2">Languages: {movie.languages.join(', ')}</p>
        </div>
        <div className="flex flex-wrap -m-1 overflow-y-auto max-h-40">
          {movie.keywords.map((keyword, index) => (
            <span key={index} className="m-1 bg-gray-300 rounded-full px-2 py-1 text-xs font-medium text-gray-700">
              {keyword}
            </span>
          ))}
        </div>
      </div>

      {/* Company Column */}
      <div className="w-1/3">
        <div className="p-4">
          <h3 className="font-bold text-md mb-1 sticky top-0 bg-white">Company: {movie.company}</h3>
        </div>
        <div className="p-4 pt-0 overflow-y-auto max-h-40">
          <ul className="list-none list-inside text-sm text-gray-600 space-y-1">
            {movie.cast.map((member, index) => (
              <li key={index} className="whitespace-nowrap">{member}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;

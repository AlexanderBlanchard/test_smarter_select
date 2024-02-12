import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
      <div className="bg-gray-200 h-48 flex justify-center items-center">
        <div className="text-xl font-semibold text-gray-800">Poster</div>
      </div>
      <div className="p-4">
        <h2 className="font-bold text-lg mb-2">{movie.name}</h2>
        <p className="text-sm text-gray-600 mb-2">Genres: {movie.genres.join(', ')}</p>
        <p className="text-sm text-gray-600 mb-2">Languages: {movie.languages.join(', ')}</p>
        <div className="flex flex-wrap -m-1 mb-2">
          {movie.keywords.map((keyword, index) => (
            <span key={index} className="m-1 bg-gray-300 rounded-full px-2 py-1 text-xs font-medium text-gray-700">
              {keyword}
            </span>
          ))}
        </div>
        <div>
          <h3 className="font-bold text-md mb-1">Company: {movie.company}</h3>
          <ul className="list-disc list-inside text-sm text-gray-600">
            {movie.cast.map((member, index) => (
              <li key={index}>{member}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;

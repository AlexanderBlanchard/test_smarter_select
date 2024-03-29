import React from "react"

const MovieCard = ({ movie }) => {
  return (
    <div className='border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out flex flex-row max-h-60'>
      {/* Poster Column */}
      <div className='w-1/4 bg-gray-200 flex justify-center items-center overflow-hidden'>
        <div className='w-full md:w-full flex flex-col justify-center items-center h-full bg-gray-200 p-4'>
          <i className='fas fa-camera fa-5x text-gray-500 mb-4'></i>
          <span className='text-gray-500 text-xl'>Under Construction</span>
        </div>
      </div>

      {/* Movie Info Column */}
      <div className='w-1/2 p-4 flex flex-col justify-between'>
        <div>
          <h2 className='font-bold text-lg mb-2'>{movie.name}</h2>
          <p className='text-sm font-bold text-gray-600 mb-2'>
            Genres: {movie.genres.join(", ")}
          </p>
          <p className='text-sm font-bold text-gray-600 mb-2'>
            Languages: {movie.languages.join(", ")}
          </p>
        </div>
        <div className='flex flex-wrap -m-1 overflow-y-auto max-h-40'>
          {movie.keywords.map((keyword, index) => (
            <span
              key={index}
              className='m-1 bg-gray-300 rounded-full px-2 py-1 text-xs font-medium text-gray-700'
            >
              {keyword}
            </span>
          ))}
        </div>
      </div>

      {/* Company Column */}
      <div className='w-1/3'>
        <div className='p-4'>
          <h3 className='font-bold text-md mb-1 sticky top-0 bg-white'>
            Company: {movie.company}
          </h3>
        </div>
        <div className='p-4 pt-0 overflow-y-auto max-h-40'>
          <ul className='list-none list-inside text-sm text-gray-600 space-y-1'>
            {movie.cast.map((member, index) => (
              <li key={index} className='whitespace-nowrap'>
                {member}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default MovieCard

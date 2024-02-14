import React, { useState, useEffect } from 'react';
import axios from 'axios';
import VoteCircle from '../utils/VoteCircle';
import CurrencyFormat from '../utils/CurrencyFormat';

const MovieDetail = ({ movie, onBack }) => {

  return (
    <div className="bg-white">
      <div className="container mx-auto">
        <div className="bg-blue-800 text-white p-6 shadow-lg">
          <div className="flex justify-between items-center">
            <h2 className="text-3xl font-bold">{movie.name} ({new Date(movie.release_date).getFullYear()})</h2>
            <button
              onClick={onBack}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Back to list
            </button>
          </div>
        </div>


        <div className="flex flex-wrap md:flex-nowrap">
          <div className="w-full md:w-1/4">
            <div className="w-full md:w-full flex flex-col justify-center items-center h-full bg-gray-200 p-4">
              <i className="fas fa-camera fa-5x text-gray-500 mb-4"></i>
              <span className="text-gray-500 text-xl">Image Not Available</span>
            </div>
          </div>

          <div className="w-full md:w-3/4 p-4 ml-2 shadow-lg rounded-lg border border-gray-200">
            <h4 className='italic text-sm mb-2'> {movie.tagline} </h4>
            <h3 className="text-2xl font-bold mb-2">Overview</h3>
            <p className='mb-2 mt-2'>{movie.overview}</p>

            <VoteCircle score={movie.vote_average} ></VoteCircle>

            
            <h3 className="text-2xl font-bold mb-2">Status</h3>
            <p className='mb-2 mt-2'>{movie.status}</p>

            <a href={movie.homepage} class="font-bold italic text-blue-600 dark:text-blue-500 hover:underline">Visit Website</a>

            <div className="mt-4">
              <h4 className="font-bold">Budget and Revenue</h4>
              <div className="flex flex-wrap">
              <span className="m-1 bg-gray-300 rounded-full px-2 py-1 text-md font-bold text-gray-700">
                  <CurrencyFormat amount={movie.budget}></CurrencyFormat>
                  </span>

                  <span className="m-1 bg-gray-300 rounded-full px-2 py-1 text-md font-bold text-gray-700">
                    <CurrencyFormat amount={movie.revenue}></CurrencyFormat>
                  </span>

              </div>
            </div>

            <div className="mt-4">
              <h4 className="font-bold">Keywords</h4>
              <div className="flex flex-wrap">
                {movie.keywords.map((keyword, index) => (
                  <span key={index} className="m-1 bg-gray-300 rounded-full px-2 py-1 text-xs font-medium text-gray-700">
                    {keyword}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;

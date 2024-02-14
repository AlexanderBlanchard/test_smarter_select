import React from 'react';

const VoteCircle = ({ score, outOf = 10 }) => {
  // Convertir el score a un número o establecerlo en 0 si no es válido
  const numericScore = parseFloat(score);
  const validScore = !isNaN(numericScore) ? numericScore : 0;

  // Calcular el porcentaje basado en el score válido
  const percentage = (validScore / outOf) * 100;
  const circumference = 2 * Math.PI * 52; // Circunferencia del círculo
  const strokeVal = (percentage / 100) * circumference;

  // Asignar color en base al porcentaje
  let color;
  if (percentage <= 30) {
    color = '#ef4444'; // Rojo
  } else if (percentage <= 55) {
    color = '#f97316'; // Naranja
  } else if (percentage <= 69) {
    color = '#eab308'; // Amarillo
  } else {
    color = '#10b981'; // Verde
  }

  return (
    <div className='flex items-center'>
      <div className='relative flex items-center justify-center w-32 h-32'>
        <svg width="128" height="128" viewBox="0 0 128 128">
          <circle
            cx="64"
            cy="64"
            r="52"
            fill="none"
            stroke="#e6e6e6"
            strokeWidth="10"
          />
          <circle
            cx="64"
            cy="64"
            r="52"
            fill="none"
            stroke={color}
            strokeWidth="10"
            strokeDasharray={`${strokeVal} ${circumference - strokeVal}`}
            transform="rotate(-90 64 64)"
          />
        </svg>
        <div className='absolute text-3xl text-gray-700'>{`${validScore.toFixed(1)}`}</div>
      </div>
      <span className='ml-4 text-xl text-gray-700 font-semibold'>User Score</span>
    </div>
  );
};

export default VoteCircle;

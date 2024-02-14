import React from 'react';

function CurrencyFormat({ amount }) {

  const formattedCurrency = parseFloat(amount).toLocaleString('es-ES', {
    style: 'currency',
    currency: 'USD', 
    minimumFractionDigits: 2,
  });

  return (
    <div>
      <p>{formattedCurrency}</p>
    </div>
  );
}

export default CurrencyFormat;

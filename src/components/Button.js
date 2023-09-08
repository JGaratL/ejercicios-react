import React from 'react';

function Button({ onClick }) {
  return (
    <button onClick={onClick}>
      Mensaje en Consola
    </button>
  );
}

export default Button;


import React from 'react';

function ShowMessage({ showMessage }) {
  return (
    <p>{showMessage ? "Ahora puedes leer esto" : ""}</p>
  );
}

export default ShowMessage;

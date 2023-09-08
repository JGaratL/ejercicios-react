// En App.js se define la variable show

import React from 'react';

function ShowName() {
  const user = {
    name: "Alejandro",
  };

  return (
    <p>{user.name}</p>
  );
}

export default ShowName;

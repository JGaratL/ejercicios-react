import React from 'react';

function NamesList() {
  const users = ['sergio', 'victoria', 'iván', 'liviu'];

  return (
    <ul>
      {users.map((user, index) => (
        <li key={index}>{user}</li>
      ))}
    </ul>
  );
}

export default NamesList;

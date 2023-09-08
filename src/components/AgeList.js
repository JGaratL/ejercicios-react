import React from 'react';

function AgeList() {
  const users = [
    { name: 'Sergio', age: 28 },
    { name: 'Victoria', age: 27 },
    { name: 'Iván', age: 30 },
    { name: 'Liviu', age: 26 },
  ];

  return (
    <ul>
      {users.map((user, index) => (
        <li key={index}>
          {user.name} - {user.age} años
        </li>
      ))}
    </ul>
  );
}

export default AgeList;

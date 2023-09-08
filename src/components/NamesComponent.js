import React, { useState, useEffect } from 'react';

function NamesComponent() {
  const [users, setUsers] = useState(['Usuario1', 'Usuario2']);

  useEffect(() => {
    setUsers((prevUsers) => [...prevUsers, 'Usuario3']);

    return () => {
      console.log('¡Componente destruido!');
    };
  }, []);

  return (
    <div>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
    </div>
  );
}

export default NamesComponent;

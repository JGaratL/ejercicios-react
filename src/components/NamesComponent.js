import React, { useState, useEffect, useRef } from 'react';

function NamesComponent() {
  const [users, setUsers] = useState(['Usuario1', 'Usuario2']);
  const hasAddedUser3 = useRef(false);

  useEffect(() => {
    if (!hasAddedUser3.current) {
      setUsers((prevUsers) => [...prevUsers, 'Usuario3']);
      hasAddedUser3.current = true;
    }

    return () => {
      console.log('¡Componente destruido!');
    };
  }, []);

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </div>
  );
}

export default NamesComponent;


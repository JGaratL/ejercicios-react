import React, { useState, useEffect } from 'react';

function FetchComponent() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      const data = await response.json();
      setData(data);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default FetchComponent;

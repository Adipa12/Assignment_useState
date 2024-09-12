import React, { useState, useEffect } from 'react';

export const FetchDataComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <div>
      <h1>Fetched Data</h1>
      {data ? (
        <ul>
          {data.slice(0, 10).map(item => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

// export default FetchDataComponent;

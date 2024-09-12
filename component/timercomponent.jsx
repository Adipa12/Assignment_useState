import React, { useState, useEffect } from 'react';

export const TimerComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Start the timer when the component mounts
    const timerId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000); // Update the count every second

    // Cleanup function: Clears the timer when the component unmounts
    return () => {
      clearInterval(timerId);
    };
  }, []); // Empty dependency array ensures this effect runs only on mount and unmount

  return (
    <div>
      <h1>Timer: {count} seconds</h1>
    </div>
  );
};



import React, { useState, useEffect } from 'react';

function Stopwatch() {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let timer = null;
    if (isActive) {
      timer = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isActive, seconds]);

  const toggle = () => {
    setIsActive(!isActive);
  };

  return (
    <div>
      <div>{seconds}s</div>
      <button onClick={toggle}>
        {isActive ? 'Pausar' : 'Iniciar'}
      </button>
    </div>
  );
}

export default Stopwatch;

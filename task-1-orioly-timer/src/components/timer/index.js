import React, { Component, useEffect, useState } from "react";
import "./index.css";

const Timer = () => {
  const [time, setTime] = useState(10);
  const [timing, setTimming] = useState(true);

  const stopTimer = () => {
    setTimming(false);
  };

  useEffect(() => {
    let interval;
    if (timing && time > 0) {
      interval = setTimeout(() => setTime(time - 1), 1000);
    }

    return () => {
      clearTimeout(interval);
    };
  }, [timing, time, setTime]);

  return (
    <div className='mt-100 layout-column align-items-center justify-content-center'>
      <div className='timer-value' data-testid='timer-value'>
        {time}
      </div>
      <button className='large' data-testid='stop-button' onClick={stopTimer}>
        Stop Timer
      </button>
    </div>
  );
};

export default Timer;

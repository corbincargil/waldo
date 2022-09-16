import React from "react";
import { useState, useEffect } from "react";

export default function Timer(props) {
  const { timerOn, setScore } = props;

  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval;

    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 100);
      }, 100);
    } else if (!timerOn) {
      setScore(time);
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [timerOn]);

  return (
    <div className="timer">
      <span id="score-text">Score: </span>
      <div className="timer-numbers">
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}.</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>
    </div>
  );
}

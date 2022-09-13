import React from "react";
import { useEffect } from "react";

export default function Timer(props) {
  const { time, setTime, gameStatus } = props;

  useEffect(() => {
    let interval;
    if (gameStatus === "searching") {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (gameStatus === "gameReady" || "completed") {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [gameStatus]);

  return (
    <div className="timer">
      <span>Score: {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
      <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
      <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
    </div>
  );
}

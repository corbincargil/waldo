import React from "react";

export default function Completed(props) {
  const { gameStatus, score } = props;
  console.log(`completed div rendered`);
  if (gameStatus === "completed") {
    return (
      <div className="completed">
        <h1>Congratulations!</h1>
        <h3>
          Your score was
          <span>
            {` `}
            {("0" + Math.floor((score / 60000) % 60)).slice(-2)}:
          </span>
          <span>{("0" + Math.floor((score / 1000) % 60)).slice(-2)}.</span>
          <span>{("" + ((score / 10) % 100)).slice(-2)}</span>
        </h3>
        <p>Please input your name to submit your score:</p>
        <div className="submit-score">
          <input type="text" name="username" id="user-input" />
          <button>Submit</button>
        </div>
        <div className="bottom-row">
          <button>Retry</button>
          <button>View Leaderboards</button>
        </div>
      </div>
    );
  }
}

import React from "react";

export default function Completed(props) {
  const { gameStatus } = props;
  if (gameStatus === "completed") {
    return (
      <div className="completed">
        <h1>Congratulations!</h1>
        <p>Please input your name to submit your score:</p>
        <input type="text" name="username" id="user-input" />
        <button>Submit</button>
        <button>Retry</button>
        <button>View Leaderboards</button>
      </div>
    );
  }
}

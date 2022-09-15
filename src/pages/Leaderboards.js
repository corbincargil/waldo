import React from "react";
import { Link } from "react-router-dom";

export default function Leaderboards() {
  const scores = [
    {
      username: "Uno",
      score: 32560,
      timestamp: "",
      id: "Cia1Or92HLrJh3EYLc5n",
    },
    {
      username: "Dos",
      score: 63560,
      timestamp: "",
      id: "Cia1Or92HLrJh3EYLc5n",
    },
    {
      username: "Tres",
      score: 63560,
      timestamp: "",
      id: "Cia1Or92HLrJh3EYLc5n",
    },
    {
      username: "Quatro",
      score: 63560,
      timestamp: "",
      id: "Cia1Or92HLrJh3EYLc5n",
    },
    {
      username: "Cinco",
      score: 63560,
      timestamp: "",
      id: "Cia1Or92HLrJh3EYLc5n",
    },
    {
      username: "Sies",
      score: 63560,
      timestamp: "",
      id: "Cia1Or92HLrJh3EYLc5n",
    },
  ];
  return (
    <div className="leaderboards">
      <div className="header-container">
        <div className="header">
          <Link to={"/"}>
            <h1>Where's Waldo</h1>
          </Link>
          <h3>Leaderboards</h3>
        </div>
      </div>
      <ol className="leaderboard-list">
        {scores.map((user) => {
          if (scores.indexOf(user) <= 2)
            return (
              <li className="list-item top-three">
                <span className="rank">{scores.indexOf(user) + 1}.</span>
                <span className="username">{user.username}</span>
                <span className="score">{user.score}</span>
              </li>
            );
          else
            return (
              <li className="list-item">
                <span className="rank">{scores.indexOf(user) + 1}.</span>
                <span className="username">{user.username}</span>
                <span className="score">{user.score}</span>
              </li>
            );
        })}
      </ol>
    </div>
  );
}

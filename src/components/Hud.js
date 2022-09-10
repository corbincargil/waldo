import React from "react";
import { Link } from "react-router-dom";

export default function Hud(props) {
  const { map, score } = props;

  return (
    <div className="hud">
      <Link to="/">
        <h1>Where's Waldo</h1>
      </Link>
      <h1>{map.name}</h1>
      <h2>Score: {score}</h2>
      <h3>Leaderboards</h3>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import DisplayLeaderboards from "../components/DisplayLeaderboards";
import { mapOne, mapTwo } from "../assets/maps";

export default function Leaderboards() {
  return (
    <div className="leaderboards-container">
      <div className="header-container">
        <div className="header">
          <Link to={"/waldo/"}>
            <h1 id="leaderboard-header-h1">Where's Waldo</h1>
          </Link>
          <Link to={"/waldo/"}>
            <h3>Back to map selection</h3>
          </Link>
        </div>
      </div>
      <h1>Top Scores</h1>
      <DisplayLeaderboards map={mapOne} />
      <DisplayLeaderboards map={mapTwo} />
    </div>
  );
}

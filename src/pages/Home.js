import React from "react";
import GamePreview from "../components/GamePreview";
import { mapOne, mapTwo } from "../assets/maps";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <div className="header-container">
        <div className="header">
          <h1>Where's Waldo</h1>
          <Link to={"./leaderboards"}>
            <h3>Leaderboards</h3>
          </Link>
        </div>
      </div>
      <h2 className="">Choose a map:</h2>
      <div className="map-selection">
        <GamePreview map={mapOne} />
        <GamePreview map={mapTwo} />
      </div>
    </div>
  );
}

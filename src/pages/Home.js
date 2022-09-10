import React from "react";
import GamePreview from "../components/GamePreview";
import { mapOne, mapTwo } from "../assets/maps";

export default function Home() {
  return (
    <div className="home">
      <div className="header">
        <h1>Where's Waldo</h1>
        <h3>Leaderboards</h3>
      </div>
      <h2 className="instructions">Choose a map:</h2>
      <div className="map-selection">
        <GamePreview map={mapOne} />
        <GamePreview map={mapTwo} />
      </div>
    </div>
  );
}

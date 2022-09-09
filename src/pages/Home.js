import React from "react";
import GamePreview from "../components/GamePreview";
import { mapOne, mapTwo } from "../assets/maps";

export default function Home() {
  return (
    <div className="home">
      <h2>Choose a map:</h2>
      <div className="map-selection">
        <GamePreview map={mapOne} />
        <GamePreview map={mapTwo} />
      </div>
    </div>
  );
}

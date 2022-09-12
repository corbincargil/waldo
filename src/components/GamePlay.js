import React from "react";
import Instructions from "./Instructions";

export default function GamePlay(props) {
  const { map, gameStatus } = props;

  return (
    <div className="game-play">
      <img id="game-image" src={map.image} alt={map.name} />
      <Instructions characters={map.characters} gameStatus={gameStatus} />
    </div>
  );
}

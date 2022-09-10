import React from "react";
import Instructions from "./Instructions";

export default function GamePlay(props) {
  const { map, status, dispatch } = props;

  return (
    <div className="game-play">
      <img id="game-image" src={map.image} alt={map.name} />
      <div>
        <Instructions
          characters={map.characters}
          status={status}
          dispatch={dispatch}
        />
      </div>
    </div>
  );
}

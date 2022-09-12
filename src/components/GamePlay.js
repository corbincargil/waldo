import React from "react";
import { useState } from "react";
import CharacterSelect from "./CharacterSelect";
import Instructions from "./Instructions";

export default function GamePlay(props) {
  const { map, gameStatus, setGameStatus } = props;
  const [position, setPosition] = useState({ x: 0, y: 0 });

  function handleClick(e) {
    console.log(e);
    console.log(`image width: ${e.target.width}`);
    console.log(`image width: ${e.target.height}`);

    if (gameStatus == "searching") {
      setGameStatus("selectingCharacter");
    }
    if (gameStatus == "selectingCharacter") {
      setGameStatus("searching");
    }
    setPosition({ x: e.pageX, y: e.pageY });
  }

  return (
    <div className="game-play">
      <img
        id="game-image"
        src={map.image}
        alt={map.name}
        onClick={handleClick}
      />
      <Instructions
        characters={map.characters}
        gameStatus={gameStatus}
        setGameStatus={setGameStatus}
      />
      <CharacterSelect
        characters={map.characters}
        gameStatus={gameStatus}
        setGameStatus={setGameStatus}
        position={position}
      />
    </div>
  );
}

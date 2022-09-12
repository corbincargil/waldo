import React from "react";
import { useState } from "react";
import CharacterSelect from "./CharacterSelect";
import Instructions from "./Instructions";

export default function GamePlay(props) {
  const { map, gameStatus, setGameStatus } = props;
  const [position, setPosition] = useState({ x: 0, y: 0 });

  function handleClick(e) {
    // console.log(e);
    // console.log(`image width: ${e.target.width}`);
    // console.log(`image width: ${e.target.height}`);
    const correctXMin = 0.48;
    const correctXMax = 0.5;
    const correctYMin = 0.4;
    const correctYMax = 0.45;
    // console.log(e.target);
    const ratioX = (e.pageX - e.target.offsetLeft) / e.target.width;
    const ratioY = (e.pageY - e.target.offsetTop) / e.target.height;
    // console.log(ratioX);
    // console.log(ratioY);
    let correctX;
    let correctY;

    if (ratioX > correctXMin && ratioX < correctXMax) {
      //console.log("correct X");
      correctX = true;
    }
    if (ratioY > correctYMin && ratioY < correctYMax) {
      //console.log("correct Y");
      correctY = true;
    }

    if (correctX && correctY) {
      console.log("CORRECT");
    }
    // console.log(`X ratio: ${e.pageX / e.target.width}`);
    // console.log(`Y ratio: ${e.pageY / e.target.height}`);

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

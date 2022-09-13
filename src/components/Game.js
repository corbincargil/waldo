import React, { useState, useEffect } from "react";
import Hud from "./Hud";
import GamePlay from "./GamePlay";

export default function Game(props) {
  const map = props.map;
  const [characters, setCharacters] = useState([...map.characters]);
  const score = "1:23.45";

  return (
    <div className="game-container">
      <Hud characters={characters} score={score}></Hud>
      <GamePlay
        map={map}
        characters={characters}
        setCharacters={setCharacters}
        score={score}
      ></GamePlay>
    </div>
  );
}

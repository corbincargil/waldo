import React, { useState } from "react";

import Hud from "./Hud";
import GamePlay from "./GamePlay";

export default function Game(props) {
  const map = props.map;
  const [characters, setCharacters] = useState([...map.characters]);
  const [gameStatus, setGameStatus] = useState("gameReady");
  const [timerOn, setTimerOn] = useState(false);
  const [score, setScore] = useState(0);

  return (
    <div className="game-container">
      <Hud characters={characters} timerOn={timerOn} setScore={setScore}></Hud>
      <GamePlay
        map={map}
        characters={characters}
        setCharacters={setCharacters}
        gameStatus={gameStatus}
        setGameStatus={setGameStatus}
        setTimerOn={setTimerOn}
        score={score}
      ></GamePlay>
    </div>
  );
}

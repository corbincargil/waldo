import React, { useState, useEffect } from "react";
import Hud from "./Hud";
import GamePlay from "./GamePlay";
import Timer from "./Timer";

export default function Game(props) {
  const map = props.map;
  const [characters, setCharacters] = useState([...map.characters]);
  const [gameStatus, setGameStatus] = useState("gameReady");
  const [time, setTime] = useState(0);

  return (
    <div className="game-container">
      <Hud
        characters={characters}
        time={time}
        setTime={setTime}
        gameStatus={gameStatus}
      ></Hud>
      <GamePlay
        map={map}
        characters={characters}
        gameStatus={gameStatus}
        setGameStatus={setGameStatus}
        setCharacters={setCharacters}
        time={time}
        setTime={setTime}
      ></GamePlay>
    </div>
  );
}

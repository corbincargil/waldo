import React, { useState, useEffect } from "react";
import Hud from "./Hud";
import GamePlay from "./GamePlay";

export default function Game(props) {
  const map = props.map;
  const score = "1:23.45";
  const gameStatus = "notStarted";

  return (
    <div className="game-container">
      <Hud map={map} score={score}></Hud>
      <GamePlay map={map} gameStatus={gameStatus}></GamePlay>
    </div>
  );
}

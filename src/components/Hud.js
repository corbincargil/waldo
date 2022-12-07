import React from "react";
import { Link } from "react-router-dom";
import CharacterIcon from "./CharacterIcon";
import Timer from "./Timer";

export default function Hud({ gameState, dispatch, timerOn }) {
  return (
    <div className="hud container">
      <Link to="/waldo/" style={{ alignSelf: "center" }}>
        <h1>Where's Waldo</h1>
      </Link>
      <div className="hud characters">
        {gameState.characters.map((character) => (
          <CharacterIcon
            name={character.name}
            icon={character.icon}
            isFound={character.isFound}
            key={character.id}
            style={{ width: "5vw" }}
          />
        ))}
      </div>
      <Timer
        gameState={gameState}
        dispatch={dispatch}
        timerOn={timerOn}
        style={{ alignSelf: "center" }}
      />
      <Link className="leaderboard-link" to="/waldo/leaderboards">
        <h3 style={{ alignSelf: "center" }}>Leaderboards</h3>
      </Link>
    </div>
  );
}

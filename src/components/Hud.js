import React, { Children } from "react";
import { Link } from "react-router-dom";
import CharacterIcon from "./CharacterIcon";
import Timer from "./Timer";

export default function Hud(props) {
  const { characters, time, setTime, gameStatus } = props;

  return (
    <div className="hud">
      <Link to="/" style={{ alignSelf: "center" }}>
        <h1>Where's Waldo</h1>
      </Link>
      <div className="hud characters">
        {characters.map((character) => (
          <CharacterIcon
            name={character.name}
            icon={character.icon}
            isFound={character.isFound}
            key={character.id}
            style={{ width: "70px" }}
          />
        ))}
      </div>
      <Timer
        time={time}
        setTime={setTime}
        gameStatus={gameStatus}
        style={{ alignSelf: "center" }}
      />
      <h3 style={{ alignSelf: "center" }}>Leaderboards</h3>
    </div>
  );
}

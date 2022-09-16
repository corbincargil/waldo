import React, { Children } from "react";
import { Link } from "react-router-dom";
import CharacterIcon from "./CharacterIcon";
import Timer from "./Timer";

export default function Hud(props) {
  const { characters, timerOn, setScore } = props;

  return (
    <div className="hud">
      <Link to="/waldo/" style={{ alignSelf: "center" }}>
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
        timerOn={timerOn}
        setScore={setScore}
        style={{ alignSelf: "center" }}
      />
      <h3 style={{ alignSelf: "center" }}>Leaderboards</h3>
    </div>
  );
}

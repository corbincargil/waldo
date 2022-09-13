import React from "react";
import { Link } from "react-router-dom";
import CharacterIcon from "./CharacterIcon";

export default function Hud(props) {
  const { characters, score } = props;

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
      <h2 style={{ alignSelf: "center" }}>Score: {score}</h2>
      <h3 style={{ alignSelf: "center" }}>Leaderboards</h3>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import CharacterIcon from "./CharacterIcon";

export default function GamePreview(props) {
  const map = props.map;

  return (
    <div className="preview">
      <h1>{map.name}</h1>
      <Link to={`/puzzle_${map.id}`}>
        <img
          className="preview-image"
          src={map.image}
          alt="map preview image"
        />
      </Link>
      <div className="characters">
        {map.characters.map((character) => (
          <div className="character-info">
            <CharacterIcon
              name={character.name}
              icon={character.icon}
              isFound={character.isFound}
              key={character.id}
            />
            <p className="character-name">{character.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

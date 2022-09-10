import React from "react";
import { Link } from "react-router-dom";

export default function GamePreview(props) {
  const map = props.map;
  const characters = map.characters;

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
        {characters.map((character) => (
          <div className="character-info" key={character.id}>
            <img
              src={character.icon}
              alt={character.name}
              className="character-icon"
            />
            <p className="character-name">{character.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

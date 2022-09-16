import React from "react";
import { Link } from "react-router-dom";
import CharacterIcon from "./CharacterIcon";

export default function GamePreview(props) {
  const map = props.map;

  return (
    <div>
      <Link to={`/waldo/puzzle_${map.id}`}>
        <div className="preview">
          <h1>{map.name}</h1>
          <img
            className="preview-image"
            src={map.image}
            alt="map preview image"
          />
          <div className="characters">
            {map.characters.map((character) => (
              <div key={character.id} className="character-info">
                <CharacterIcon
                  name={character.name}
                  icon={character.icon}
                  isFound={character.isFound}
                  style={{ width: "50px" }}
                />
                <p className="character-name">{character.name}</p>
              </div>
            ))}
          </div>
        </div>
      </Link>
    </div>
  );
}

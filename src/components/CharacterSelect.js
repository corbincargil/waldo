import React from "react";

import CharacterIcon from "./CharacterIcon";

import { fetchLocations } from "../firebase/initialize";

export default function CharacterSelect(props) {
  const {
    characters,
    gameStatus,
    setGameStatus,
    clickCoordinates,
    setSelectedCharacter,
    setSelectedCharLocation,
  } = props;

  const locations = fetchLocations();

  function getSelectedCharLocation(character) {
    const selectedCharLocation = locations.find((location) => {
      return location.name.toLowerCase() === character.name.toLowerCase();
    });
    return selectedCharLocation;
  }

  function handleClick(id) {
    const char = characters.find((character) => {
      return character.id === id;
    });
    setSelectedCharacter(char);
    const newSelectedCharLocation = getSelectedCharLocation(char);
    setSelectedCharLocation(newSelectedCharLocation);
    setGameStatus("searching");
    // 1) use char to fetch the correct char location.
    // 2) if 'position' matches correctPosition, replace char with char = {...char,isFound: true} and increment charsFound.
    // 3) If charsFound == characters.length, setStatus to 'complete', else, setStatus to 'searching'
  }

  if (gameStatus === "selectingCharacter") {
    return (
      <div
        className="character-select"
        style={{
          left: `${clickCoordinates.x}px`,
          top: `${clickCoordinates.y}px`,
        }}
      >
        {characters.map((character) => (
          <div
            key={character.id}
            className="selection-box"
            onClick={() => {
              if (!character.isFound) {
                handleClick(character.id);
              }
            }}
          >
            <CharacterIcon
              name={character.name}
              icon={character.icon}
              isFound={character.isFound}
              style={{
                width: "50px",
              }}
            />
            <p className="character-name">{character.name}</p>
          </div>
        ))}
      </div>
    );
  }
}

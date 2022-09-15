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
    charactersNotFound,
  } = props;

  const locations = fetchLocations();
  // const locations = [
  //   { name: "wenda", X_Min: 0.48, X_Max: 0.5, Y_Min: 0.4, Y_Max: 0.45 },
  //   { name: "waldo", X_Min: 0.83, X_Max: 0.88, Y_Min: 0.7, Y_Max: 0.78 },
  //   { X_Max: 0.61, X_Min: 0.545, Y_Max: 0.39, Y_Min: 0.345, name: "scorpion" },
  //   { X_Max: 0.61, X_Min: 0.55, Y_Max: 0.637, Y_Min: 0.6, name: "ratchet" },
  //   { X_Max: 0.08, X_Min: 0.05, Y_Max: 0.79, Y_Min: 0.74, name: "whitebeard" },
  //   { X_Max: 0.32, X_Min: 0.26, Y_Max: 0.81, Y_Min: 0.77, name: "chell" },
  //   { X_Max: 0.6, X_Min: 0.54, Y_Max: 0.93, Y_Min: 0.88, name: "master chief" },
  //   { X_Max: 0.33, X_Min: 0.31, Y_Max: 0.66, Y_Min: 0.62, name: "odlaw" },
  // ];

  function getSelectedCharLocation(character) {
    const selectedCharLocation = locations.find((location) => {
      return location.name.toLowerCase() === character.name.toLowerCase();
    });
    return selectedCharLocation;
  }

  function handleCharacterSelect(id) {
    const char = characters.find((character) => {
      return character.id === id;
    });
    setSelectedCharacter(char);
    const newSelectedCharLocation = getSelectedCharLocation(char);
    setSelectedCharLocation(newSelectedCharLocation);
    setGameStatus("searching");
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
        {charactersNotFound.map((character) => (
          <div
            key={character.id}
            className="selection-box"
            onClick={() => {
              if (!character.isFound) {
                handleCharacterSelect(character.id);
              }
            }}
          >
            <CharacterIcon
              name={character.name}
              icon={character.icon}
              isFound={character.isFound}
              style={{
                width: "70px",
              }}
            />
            <p className="character-name">{character.name}</p>
          </div>
        ))}
      </div>
    );
  }
}

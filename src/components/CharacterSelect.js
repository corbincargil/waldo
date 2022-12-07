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

  // const locations = fetchLocations();
  const locations = [
    { X_Min: 0.48, X_Max: 0.5, Y_Min: 0.4, Y_Max: 0.45, name: "wenda" },
    { X_Min: 0.83, X_Max: 0.88, Y_Min: 0.7, Y_Max: 0.78, name: "waldo" },
    { X_Min: 0.545, X_Max: 0.61, Y_Min: 0.345, Y_Max: 0.39, name: "scorpion" },
    { X_Min: 0.55, X_Max: 0.61, Y_Min: 0.6, Y_Max: 0.637, name: "ratchet" },
    { X_Min: 0.05, X_Max: 0.08, Y_Min: 0.74, Y_Max: 0.79, name: "whitebeard" },
    { X_Min: 0.26, X_Max: 0.32, Y_Min: 0.77, Y_Max: 0.81, name: "chell" },
    { X_Min: 0.54, X_Max: 0.6, Y_Min: 0.88, Y_Max: 0.93, name: "master chief" },
    { X_Min: 0.31, X_Max: 0.33, Y_Min: 0.62, Y_Max: 0.66, name: "odlaw" },
  ];

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
              style={{ width: "5vw" }}
            />
            <p className="character-name">{character.name}</p>
          </div>
        ))}
      </div>
    );
  }
}

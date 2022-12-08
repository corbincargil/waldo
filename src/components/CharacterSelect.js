import React from "react";

import CharacterIcon from "./CharacterIcon";

//used for storing char location on firebase.... unnessecary and slow
// import { fetchLocations } from "../firebase/initialize";

export default function CharacterSelect({ gameState, dispatch }) {
  // const {
  //   gameState,
  //   dispatch,
  //   clickCoordinates,
  //   setSelectedCharacter,
  //   setSelectedCharLocation,
  //   charactersNotFound,
  // } = props;

  const {
    characters,
    gameStatus,
    clickCoordinates,
    charactersNotFound,
    selectedCharLocation,
  } = gameState;

  //used for storing char location on firebase.... unnessecary and slow
  // const locations = fetchLocations();

  function handleCharacterSelect(id) {
    const char = characters.find((character) => {
      return character.id === id;
    });
    const newSelectedCharLocation = getSelectedCharLocation(char);
    const isCorrect = checkCorrectSelection(
      newSelectedCharLocation,
      clickCoordinates
    );
    const newCharsNotFound = characters.filter((character) => {
      if (!character.isFound) return { ...character };
    });
    dispatch({
      type: "CHARACTER_SELECTED",
      newSelectedCharacter: char,
      newSelectedCharLocation: newSelectedCharLocation,
      isCorrect: isCorrect,
      newCharsNotFound: newCharsNotFound,
    });

    // setSelectedCharacter(char);
    // setSelectedCharLocation(newSelectedCharLocation);
    // dispatch({ type: "UPDATE_STATUS", status: "searching" });

    // if (isCorrect && charactersNotFound !== 0) {
    //   // setSelectedCharacter({ ...selectedCharacter, isFound: true });
    //   // setFeedback("selectionCorrect");
    //   dispatch({ type: "SELECTION_CORRECT" });
    // } else {
    //   if (gameStatus === "searching") {
    //     // setFeedback("selectionIncorrect");
    //     dispatch({ type: "SELECTION_INCORRECT" });
    //   }
    // }
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

function checkCorrectSelection(charLocation, clickCoordinates) {
  const correctXMin = charLocation.X_Min;
  const correctXMax = charLocation.X_Max;
  const correctYMin = charLocation.Y_Min;
  const correctYMax = charLocation.Y_Max;

  if (
    clickCoordinates.ratioX > correctXMin &&
    clickCoordinates.ratioX < correctXMax &&
    clickCoordinates.ratioY > correctYMin &&
    clickCoordinates.ratioY < correctYMax
  ) {
    return true;
  } else return false;
}

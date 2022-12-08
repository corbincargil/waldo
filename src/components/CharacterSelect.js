import React from "react";
import CharacterIcon from "./CharacterIcon";
import {
  getNewCharacterArray,
  getSelectedCharLocation,
  checkCorrectSelection,
} from "../utils/gameUtils";

export default function CharacterSelect({ gameState, dispatch }) {
  const { characters, gameStatus, clickCoordinates, charactersNotFound } =
    gameState;

  function handleCharacterSelect(id) {
    const char = characters.find((character) => character.id === id);
    const newCharacters = getNewCharacterArray(characters, id);
    const charLocation = getSelectedCharLocation(char);
    const isCorrect = checkCorrectSelection(charLocation, clickCoordinates);

    dispatch({
      type: "CHARACTER_SELECTED",
      newSelectedCharacter: { ...char, isFound: true },
      newSelectedCharLocation: charLocation,
      isCorrect: isCorrect,
      newCharacters: newCharacters,
    });
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

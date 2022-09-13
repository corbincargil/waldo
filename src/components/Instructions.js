import React, { useEffect } from "react";
import CharacterIcon from "./CharacterIcon";

export default function Instructions(props) {
  const { map, gameStatus, setGameStatus, characters, setCharacters } = props;

  function handleStartGame() {
    setGameStatus("searching");
  }

  useEffect(() => {
    if (gameStatus === "gameReady") {
      setCharacters(map.characters);
    }
  }, [gameStatus]);

  if (gameStatus === "gameReady") {
    return (
      <div className="instructions">
        <h3>Select each of the characters below:</h3>
        <div className="character-list">
          {characters.map((character) => (
            <CharacterIcon
              name={character.name}
              icon={character.icon}
              key={character.id}
              style={{ width: "70px" }}
            />
          ))}
        </div>
        <button onClick={handleStartGame}>Start</button>
      </div>
    );
  }
}

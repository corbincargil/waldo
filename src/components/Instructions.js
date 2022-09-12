import React, { useEffect } from "react";
import CharacterIcon from "./CharacterIcon";

export default function Instructions(props) {
  const { characters, gameStatus } = props;

  function handleStartGame() {
    console.log("handleStartGame ran");
  }

  useEffect(() => {
    console.log(`side effect!! gameStatus: ${gameStatus}`);
    return () => {
      console.log("Instructions component unmounted");
    };
  }, [gameStatus]);

  if (gameStatus === "notStarted") {
    return (
      <div className="instructions">
        <h3>Select each of the characters below:</h3>
        <div className="character-list">
          {characters.map((character) => (
            <CharacterIcon
              name={character.name}
              icon={character.icon}
              key={character.id}
            />
          ))}
        </div>
        <button onClick={handleStartGame}>Start</button>
      </div>
    );
  }
}

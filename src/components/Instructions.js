import React, { useEffect } from "react";
import CharacterIcon from "./CharacterIcon";

export default function Instructions(props) {
  const { characters, gameStatus, setGameStatus } = props;

  function handleStartGame() {
    setGameStatus("searching");
  }

  // useEffect(() => {
  //   console.log(`side effect!! gameStatus: ${gameStatus}`);
  //   return () => {
  //     console.log("Instructions component unmounted");
  //   };
  // }, [gameStatus]);

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
              style={{ width: "70px" }}
            />
          ))}
        </div>
        <button onClick={handleStartGame}>Start</button>
      </div>
    );
  }
}

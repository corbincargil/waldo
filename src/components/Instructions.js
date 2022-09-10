import React from "react";

export default function Instructions(props) {
  const { characters, status, dispatch } = props;

  function handleStartGame() {
    console.log("handleStartGame ran");
    dispatch({
      type: "startedGame",
    });
  }

  if (status == "notStarted") {
    return (
      <div className="instructions">
        <h3>Select each of the characters below:</h3>
        <div className="character-list">
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
        <button onClick={handleStartGame}>Start</button>
      </div>
    );
  }
}

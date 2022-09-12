import React from "react";
import CharacterIcon from "./CharacterIcon";

export default function CharacterSelect(props) {
  const { characters, gameStatus, setGameStatus, position } = props;

  function handleClick(id) {
    const char = characters.find((character) => {
      return character.id === id;
    });
    // console.log(char);
    // 1) use char to fetch the correct char location.
    // 2) if 'position' matches correctPosition, replace char with char = {...char,isFound: true} and increment charsFound.
    // 3) If charsFound == characters.length, setStatus to 'complete', else, setStatus to 'searching'
    setGameStatus("searching");
  }

  //   const correctPosition = { x: 796, y: 545 };
  //   console.log(`correct: (${correctPosition.x}, ${correctPosition.y})`);
  //   console.log(`you clicked: (${position.x},${position.y})`);

  if (gameStatus === "selectingCharacter") {
    // console.log(position.x);
    // console.log(position.y);
    return (
      <div
        className="character-select"
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      >
        {characters.map((character) => (
          <div
            key={character.id}
            className="selection-box"
            onClick={() => {
              handleClick(character.id);
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

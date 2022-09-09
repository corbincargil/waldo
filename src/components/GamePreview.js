import React from "react";

export default function GamePreview() {
  return (
    <div className="preview">
      <h1>{title}</h1>
      <img src="{image}" alt="{tite} preview" />
      <div className="characters">
        {characters.map((character) => {
          <div className="chracter-info">
            <img
              src={chracter.icon} //not sure which way to put it
              alt="{character.name}" //not sure which way to put it
              className="character-icon"
            />
            <span className="character-name">{character.name}</span>
          </div>;
        })}
      </div>
    </div>
  );
}

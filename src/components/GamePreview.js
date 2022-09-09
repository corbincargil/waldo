import React from "react";

export default function GamePreview(props) {
  const map = props.map;
  const characters = map.characters;

  return (
    <div
      className="preview"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <h1>{map.name}</h1>
      <img
        src={map.image}
        alt="map preview image"
        style={{ width: "350px", height: "auto" }}
      />
      <div className="characters" style={{ display: "flex" }}>
        {/* <ul > */}
        {characters.map((character) => (
          <div
            className="character-info"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              src={character.icon}
              alt={character.name}
              className="character-icon"
              style={{ width: "40px", height: "auto" }}
            />
            <span className="character-name">{character.name}</span>
          </div>
        ))}
        {/* </ul> */}
      </div>
    </div>
  );
}

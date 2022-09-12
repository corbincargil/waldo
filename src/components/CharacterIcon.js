import React from "react";

export default function CharacterIcon(props) {
  if (props.isFound) {
    return (
      <div className="character-icon found">
        <img
          src={props.icon}
          alt={props.name}
          className="character-img"
          style={{ width: "80px" }}
        />
      </div>
    );
  } else {
    return (
      <div className="character-icon">
        <img
          src={props.icon}
          alt={props.name}
          className="character-img"
          style={{ width: "70px" }}
        />
      </div>
    );
  }
}

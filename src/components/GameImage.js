import React from "react";

export default function GameImage(props) {
  const { id, src, alt, onClick, gameStatus } = props;
  if (gameStatus === "gameReady") {
    return <img id={id} src={src} alt={alt} className="blur" />;
  } else {
    return <img id={id} src={src} alt={alt} onClick={onClick} />;
  }
}

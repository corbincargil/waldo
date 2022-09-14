import React from "react";

export default function GameImage(props) {
  const { id, src, alt, onClick, gameStatus } = props;
  if (gameStatus === "gameReady") {
    return <img id={id} src={src} alt={alt} className="blur" />;
  } else if (gameStatus === "completed") {
    return <img id={id} src={src} alt={alt} className="dark" />;
  } else {
    return <img id={id} src={src} alt={alt} onClick={onClick} />;
  }
}

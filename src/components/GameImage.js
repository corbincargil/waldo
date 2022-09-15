import React from "react";

export default function GameImage(props) {
  const { id, src, alt, onClick, gameStatus } = props;
  switch (gameStatus) {
    case "gameReady": {
      return <img id={id} src={src} alt={alt} className="blur" />;
    }
    case "completed": {
      return <img id={id} src={src} alt={alt} className="dark" />;
    }
    default: {
      return <img id={id} src={src} alt={alt} onClick={onClick} />;
    }
  }
}

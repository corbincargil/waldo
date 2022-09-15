import React, { useEffect, useState } from "react";
import { animated, useTransition } from "@react-spring/web";
import CharacterIcon from "./CharacterIcon";

export default function Instructions(props) {
  const {
    map,
    gameStatus,
    setGameStatus,
    characters,
    setCharacters,
    setTimerOn,
    setFeedback,
  } = props;

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (gameStatus === "gameReady") {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [gameStatus]);

  const fadeIn = useTransition(isVisible, {
    from: { x: -400, y: -500, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1 },
    leave: { x: 1200, opacity: 0.1 },
    exitBeforeEnter: true,
  });

  function handleStartGame() {
    setGameStatus("searching");
    setTimerOn(true);
    setFeedback("gameStarted");
  }

  useEffect(() => {
    if (gameStatus === "gameReady") {
      setCharacters(map.characters);
    }
  }, [gameStatus]);

  return fadeIn((style, item) =>
    item ? (
      <animated.div className="instructions" style={style}>
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
      </animated.div>
    ) : (
      ""
    )
  );
}

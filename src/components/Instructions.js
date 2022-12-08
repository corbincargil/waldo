import React, { useEffect, useState } from "react";
import { animated, useTransition } from "@react-spring/web";
import CharacterIcon from "./CharacterIcon";

export default function Instructions({ gameState, dispatch }) {
  const { map, characters, gameStatus } = gameState;

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
  });

  function handleStartGame() {
    dispatch({ type: "UPDATE_STATUS", status: "searching" });
    dispatch({ type: "START_TIMER", timerOn: true });
    // setFeedback("gameStarted");
    dispatch({ type: "RESET_FEEDBACK", feeback: "gameStarted" });
  }

  useEffect(() => {
    if (gameStatus === "gameReady") {
      dispatch({ type: "UPDATE_CHARS", characters: map.characters });
    }
  }, [gameStatus]);

  if (gameStatus === "gameReady") {
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
                style={{ width: "5vw" }}
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
}

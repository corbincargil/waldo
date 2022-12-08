import React from "react";
import { useEffect } from "react";
import GameImage from "./GameImage";
import Instructions from "./Instructions";
import CharacterSelect from "./CharacterSelect";
import Completed from "./Completed";
import Feedback from "./Feedback";
import { updateCoordinates } from "../utils/gameUtils";

export default function GamePlay({ gameState, dispatch }) {
  const { map, characters, gameStatus, charactersNotFound, feedback } =
    gameState;

  useEffect(() => {
    const newUnfoundChars = characters.filter((character) => {
      if (!character.isFound) return { ...character };
    });
    dispatch({
      type: "UPDATE_CHARS_NOT_FOUND",
      newUnfoundChars: newUnfoundChars,
    });
  }, [characters]);

  useEffect(() => {
    function onTimeout() {
      dispatch({ type: "RESET_FEEDBACK" });
    }
    const delay = setTimeout(onTimeout, 2000);
    return () => {
      clearTimeout(delay);
    };
  }, [feedback]);

  useEffect(() => {
    if (charactersNotFound.length === 0) {
      dispatch({ type: "GAME_COMPLETED" });
    }
  }, [charactersNotFound]);

  function handleImgClick(e) {
    dispatch({
      type: "IMAGE_CLICKED",
      newClickCoordinates: updateCoordinates(e),
    });
  }

  return (
    <div className="game-play">
      <Feedback feedback={feedback} />
      <GameImage
        id="game-image"
        src={map.image}
        alt={map.name}
        onClick={handleImgClick}
        gameStatus={gameStatus}
      />
      {(() => {
        switch (gameStatus) {
          case "gameReady":
            return <Instructions gameState={gameState} dispatch={dispatch} />;
          case "selectingCharacter":
            return (
              <CharacterSelect gameState={gameState} dispatch={dispatch} />
            );
          case "completed":
            return <Completed gameState={gameState} dispatch={dispatch} />;
        }
      })()}
    </div>
  );
}

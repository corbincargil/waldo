import React from "react";
import { useState, useEffect } from "react";

import GameImage from "./GameImage";
import Instructions from "./Instructions";
import CharacterSelect from "./CharacterSelect";
import Completed from "./Completed";
import Feedback from "./Feedback";

export default function GamePlay({ gameState, dispatch }) {
  const { map, characters, gameStatus } = gameState;
  const [charactersNotFound, SetCharactersNotFound] = useState([null]);
  const [feedback, setFeedback] = useState(null);
  const [selectedCharacter, setSelectedCharacter] = useState({});
  const [selectedCharLocation, setSelectedCharLocation] = useState({});
  const [clickCoordinates, setclickCoordinates] = useState({
    ratioX: 0,
    ratioY: 0,
    x: 0,
    y: 0,
  });

  /* All of the useEffects below are chained together. When one of them runs, it causes a domino effect where the rest of them run as well to update different state elements. A reducer can be used to bundle these actions and update all the differnt states at one time. */

  useEffect(() => {
    const isCorrect = checkCorrectSelection(
      selectedCharLocation,
      clickCoordinates
    );

    if (isCorrect && charactersNotFound !== 0) {
      setSelectedCharacter({ ...selectedCharacter, isFound: true });
      setFeedback("selectionCorrect");
    } else {
      if (gameStatus === "searching") {
        setFeedback("selectionIncorrect");
      }
    }
  }, [selectedCharLocation]);

  useEffect(() => {
    const newCharacters = characters.map((character) => {
      if (character.id === selectedCharacter.id) {
        return selectedCharacter;
      } else {
        return character;
      }
    });
    dispatch({ type: "UPDATE_CHARS", characters: newCharacters });
  }, [selectedCharacter]);

  useEffect(() => {
    const newUnfoundChars = characters.filter((character) => {
      if (!character.isFound) return { ...character };
    });
    SetCharactersNotFound(newUnfoundChars);
  }, [characters]);

  useEffect(() => {
    function onTimeout() {
      setFeedback(null);
    }
    const delay = setTimeout(onTimeout, 2000);
    return () => {
      clearTimeout(delay);
    };
  }, [feedback]);

  useEffect(() => {
    if (charactersNotFound.length === 0) {
      console.log("game completed");
      dispatch({ type: "UPDATE_STATUS", status: "completed" });
      dispatch({ type: "START_TIMER", timerOn: false });
    }
  }, [charactersNotFound]);

  function handleImgClick(e) {
    let newRatioX;
    let newRatioY;
    newRatioX = (e.pageX - e.target.offsetLeft) / e.target.width;
    newRatioY = (e.pageY - e.target.offsetTop) / e.target.height;
    setclickCoordinates({
      ratioX: newRatioX,
      ratioY: newRatioY,
      x: e.pageX,
      y: e.pageY,
    });
    if (gameStatus === "searching") {
      dispatch({
        type: "UPDATE_STATUS",
        status: "selectingCharacter",
      });
    }
    if (gameStatus === "selectingCharacter") {
      dispatch({ type: "UPDATE_STATUS", status: "searching" });
    }
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
            return (
              <Instructions
                gameState={gameState}
                dispatch={dispatch}
                setFeedback={setFeedback}
              />
            );
          case "selectingCharacter":
            return (
              <CharacterSelect
                gameState={gameState}
                dispatch={dispatch}
                clickCoordinates={clickCoordinates}
                setSelectedCharacter={setSelectedCharacter}
                setSelectedCharLocation={setSelectedCharLocation}
                charactersNotFound={charactersNotFound}
              />
            );
          case "completed":
            return <Completed gameState={gameState} dispatch={dispatch} />;
        }
      })()}
    </div>
  );
}

function checkCorrectSelection(charLocation, clickCoordinates) {
  const correctXMin = charLocation.X_Min;
  const correctXMax = charLocation.X_Max;
  const correctYMin = charLocation.Y_Min;
  const correctYMax = charLocation.Y_Max;

  if (
    clickCoordinates.ratioX > correctXMin &&
    clickCoordinates.ratioX < correctXMax &&
    clickCoordinates.ratioY > correctYMin &&
    clickCoordinates.ratioY < correctYMax
  ) {
    return true;
  } else return false;
}

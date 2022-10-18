import React from "react";
import { useState, useEffect } from "react";

import GameImage from "./GameImage";
import Instructions from "./Instructions";
import CharacterSelect from "./CharacterSelect";
import Completed from "./Completed";
import Feedback from "./Feedback";

export default function GamePlay(props) {
  const {
    map,
    characters,
    setCharacters,
    gameStatus,
    setGameStatus,
    setTimerOn,
    score,
  } = props;

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

  useEffect(() => {
    const correctXMin = selectedCharLocation.X_Min;
    const correctXMax = selectedCharLocation.X_Max;
    const correctYMin = selectedCharLocation.Y_Min;
    const correctYMax = selectedCharLocation.Y_Max;

    let XCoordinateCorrect;
    let YCoordinateCorrect;

    if (
      clickCoordinates.ratioX > correctXMin &&
      clickCoordinates.ratioX < correctXMax
    ) {
      XCoordinateCorrect = true;
    }
    if (
      clickCoordinates.ratioY > correctYMin &&
      clickCoordinates.ratioY < correctYMax
    ) {
      YCoordinateCorrect = true;
    }

    if (XCoordinateCorrect && YCoordinateCorrect && charactersNotFound !== 0) {
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
    setCharacters(newCharacters);
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
      setGameStatus("completed");
      setTimerOn(false);
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
      setGameStatus("selectingCharacter");
    }
    if (gameStatus === "selectingCharacter") {
      setGameStatus("searching");
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
                map={map}
                gameStatus={gameStatus}
                setGameStatus={setGameStatus}
                characters={characters}
                setCharacters={setCharacters}
                setTimerOn={setTimerOn}
                setFeedback={setFeedback}
              />
            );
          case "selectingCharacter":
            return (
              <CharacterSelect
                gameStatus={gameStatus}
                setGameStatus={setGameStatus}
                characters={characters}
                clickCoordinates={clickCoordinates}
                setSelectedCharacter={setSelectedCharacter}
                setSelectedCharLocation={setSelectedCharLocation}
                setTimerOn={setTimerOn}
                charactersNotFound={charactersNotFound}
              />
            );
          case "completed":
            return (
              <Completed
                gameStatus={gameStatus}
                score={score}
                setGameStatus={setGameStatus}
                setTime={props.setTime}
              />
            );
        }
      })()}
    </div>
  );
}

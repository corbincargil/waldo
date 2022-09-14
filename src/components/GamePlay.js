import React from "react";
import { useState, useEffect } from "react";

import GameImage from "./GameImage";
import Instructions from "./Instructions";
import CharacterSelect from "./CharacterSelect";
import Completed from "./Completed";

export default function GamePlay(props) {
  const {
    map,
    characters,
    setCharacters,
    gameStatus,
    setGameStatus,
    setTimerOn,
  } = props;

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

    if (XCoordinateCorrect && YCoordinateCorrect) {
      setSelectedCharacter({ ...selectedCharacter, isFound: true });
    } else {
      console.log("Wrong!");
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
    let charactersFound = 0;
    characters.map((character) => {
      if (character.isFound) {
        charactersFound++;
        console.log(`characters found: ${charactersFound}`);
      }
    });
    if (charactersFound === map.characters.length) {
      console.log("game completed");
      setGameStatus("completed");
      setTimerOn(false);
    }
  }, [characters]);

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
      <GameImage
        id="game-image"
        src={map.image}
        alt={map.name}
        onClick={handleImgClick}
        gameStatus={gameStatus}
      />
      <Instructions
        map={map}
        gameStatus={gameStatus}
        setGameStatus={setGameStatus}
        characters={characters}
        setCharacters={setCharacters}
        setTimerOn={setTimerOn}
      />
      <CharacterSelect
        gameStatus={gameStatus}
        setGameStatus={setGameStatus}
        characters={characters}
        clickCoordinates={clickCoordinates}
        setSelectedCharacter={setSelectedCharacter}
        setSelectedCharLocation={setSelectedCharLocation}
        setTimerOn={setTimerOn}
      />
      <Completed gameStatus={gameStatus} />
    </div>
  );
}

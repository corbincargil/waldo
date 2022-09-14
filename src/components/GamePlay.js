import React from "react";
import { useState, useEffect } from "react";

import CharacterSelect from "./CharacterSelect";
import GameImage from "./GameImage";
import Instructions from "./Instructions";

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

  console.log(`rendered`);

  // let interval;
  // function startTimer() {
  //   interval = setInterval(() => {
  //     setTime((prevTime) => prevTime + 10);
  //   }, 10);
  // }
  // function stopTimer() {
  //   clearInterval(interval);
  // }

  // useEffect(() => {
  //   switch (gameStatus) {
  //     case "searching":
  //     case "selectingCharacter":
  //       setTimerOn(true);
  //       break;
  //     case "gameReady":
  //     case "completed":
  //       setTimerOn(false);

  //     default:
  //       break;
  //   }
  // }, [gameStatus]);

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
      console.log("correct X");
      XCoordinateCorrect = true;
    }
    if (
      clickCoordinates.ratioY > correctYMin &&
      clickCoordinates.ratioY < correctYMax
    ) {
      console.log("correct Y");
      YCoordinateCorrect = true;
    }

    if (XCoordinateCorrect && YCoordinateCorrect) {
      console.log("CORRECT");
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

  function handleClick(e) {
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
    //console.log(`(${newRatioX},${newRatioY})`);
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
        onClick={handleClick}
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
    </div>
  );
}

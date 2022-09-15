import React, { useState } from "react";

import Hud from "./Hud";
import GamePlay from "./GamePlay";

export default function Game(props) {
  const map = props.map;
  const [characters, setCharacters] = useState([...map.characters]);
  const [gameStatus, setGameStatus] = useState("gameReady");
  const [timerOn, setTimerOn] = useState(false);
  const [score, setScore] = useState(0);

  return (
    <div className="game-container">
      <Hud characters={characters} timerOn={timerOn} setScore={setScore}></Hud>
      <GamePlay
        map={map}
        characters={characters}
        setCharacters={setCharacters}
        gameStatus={gameStatus}
        setGameStatus={setGameStatus}
        setTimerOn={setTimerOn}
        score={score}
      ></GamePlay>
    </div>
  );
}

// To do:
// 1) Set up leaderboard page
//    1a) Create Leaderboard.js component
//    1b) Pull information from firebase and display
//    1c) Include ability for users to select leaderboard for each map
// 2) Connect Complete.js to leaderboad collection in firebase
//    2a) when a user clicks submit, the form should submit to firebase
// 3) Improve styling of app
//    3a) Want to try implementing react spring for the displaying of:
//        Instructions.js, Completed.js, and Feedback.js

// COMPLETED
// 1) Add some sort of feedback for when the user selects a character
//    a) if they found a char, let them know. If not, tell them to keep
//        looking

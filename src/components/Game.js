import React, { useReducer, useState } from "react";

import Hud from "./Hud";
import GamePlay from "./GamePlay";

export default function Game({ map }) {
  const [gameState, dispatch] = useReducer(gameReducer, map, getInitialState);
  // const [timerOn, setTimerOn] = useState(false);

  return (
    <div className="game-container">
      <Hud gameState={gameState} dispatch={dispatch}></Hud>
      <GamePlay gameState={gameState} dispatch={dispatch}></GamePlay>
    </div>
  );
}

// To do:

// COMPLETED
// 0) Add some sort of feedback for when the user selects a character
//    a) if they found a char, let them know. If not, tell them to keep
//        looking
// 1) Set up leaderboard page
//    1a) Create Leaderboard.js component
//    1b) Pull information from firebase and display
//    1c) Include ability for users to select leaderboard for each map
// 2) Connect Complete.js to leaderboad collection in firebase
//    2a) when a user clicks submit, the form should submit to firebase
// 3) Improve styling of app
//    3a) Want to try implementing react spring for the displaying of:
//        Instructions.js, Completed.js, and Feedback.js

/* New action.types's: 
    - START_GAME
    - 
*/
function gameReducer(state, action) {
  switch (action.type) {
    case "UPDATE_MAP":
      return {
        ...state,
        map: action.map,
        characters: action.map.characters,
        gameStatus: "gameReady",
        score: 0,
      };
    case "UPDATE_CHARS":
      return {
        ...state,
        characters: action.characters,
      };
    case "UPDATE_STATUS":
      return {
        ...state,
        gameStatus: action.status,
      };
    case "UPDATE_SCORE":
      return {
        ...state,
        score: action.score,
      };
    case "START_TIMER":
      return {
        ...state,
        timerOn: action.timerOn,
      };
    default:
      return state;
  }
}

function getInitialState(map) {
  return {
    map: map,
    characters: [...map.characters],
    gameStatus: "gameReady",
    score: 0,
    timerOn: false,
  };
}

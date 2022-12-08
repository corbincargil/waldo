import React, { useReducer } from "react";

import Hud from "./Hud";
import GamePlay from "./GamePlay";

export default function Game({ map }) {
  const [gameState, dispatch] = useReducer(gameReducer, map, getInitialState);

  return (
    <div className="game-container">
      <Hud gameState={gameState} dispatch={dispatch}></Hud>
      <GamePlay gameState={gameState} dispatch={dispatch}></GamePlay>
    </div>
  );
}

function gameReducer(state, action) {
  switch (action.type) {
    case "GAME_STARTED":
      return {
        ...state,
        gameStatus: "searching",
        timerOn: true,
      };

    case "IMAGE_CLICKED":
      let newStatus;
      state.gameStatus === "searching"
        ? (newStatus = "selectingCharacter")
        : (newStatus = "searching");
      return {
        ...state,
        gameStatus: newStatus,
        clickCoordinates: action.newClickCoordinates,
      };

    case "CHARACTER_SELECTED":
      if (action.isCorrect && state.charactersNotFound !== 0) {
        return {
          ...state,
          selectedCharacter: action.newSelectedCharacter,
          characters: action.newCharacters,
          feedback: "selectionCorrect",
          gameStatus: "searching",
        };
      } else {
        return {
          ...state,
          feedback: "selectionIncorrect",
          gameStatus: "searching",
        };
      }

    case "UPDATE_CHARS_NOT_FOUND":
      return {
        ...state,
        charactersNotFound: action.newUnfoundChars,
      };

    case "RESET_FEEDBACK":
      return {
        ...state,
        feedback: null,
      };

    case "GAME_COMPLETED":
      return {
        ...state,
        gameStatus: "completed",
        timerOn: false,
      };

    case "UPDATE_SCORE":
      return {
        ...state,
        score: action.score,
      };

    case "RESET_GAME":
      return {
        ...getInitialState(state.map),
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
    timerOn: false,
    selectedCharacter: {},
    charactersNotFound: [...map.characters],
    score: 0,
    feedback: null,
    clickCoordinates: {
      ratioX: 0,
      ratioY: 0,
      x: 0,
      y: 0,
    },
  };
}

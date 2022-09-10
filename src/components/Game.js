import React, { useReducer } from "react";
import Hud from "./Hud";
import GamePlay from "./GamePlay";

export default function Game(props) {
  const map = props.map;

  const [gameState, dispatch] = useReducer(gameReducer, {
    status: "notStarted",
    score: 0,
    characters: map.characters,
  });

  function myTimer() {
    const d = new Date();
  }

  function gameReducer(gameState, action) {
    switch (action.type) {
      //   case "selectedImage": {
      //     return {
      //       ...gameState,
      //       status: "gameReady",
      //     };
      //   }
      case "startedGame": {
        return {
          ...gameState,
          status: "searching",
          score: setInterval(() => {
            this.score = this.score + 1;
          }, 1000),
        };
      }
      case "clickedImage": {
        return {
          ...gameState,
          status: "selectingCharacter",
        };
      }
      case "selectedCharacter": {
        return {
          ...gameState,
          status: "awaitingResponse",
        };
      }
      case "finishedGame": {
        return {
          ...gameState,
          status: "gameCompleted",
        };
      }
      default:
        throw new Error();
    }
  }

  return (
    <div className="game-container">
      <Hud map={map} score={gameState.score}></Hud>
      <GamePlay
        map={map}
        status={gameState.status}
        dispatch={dispatch}
      ></GamePlay>
    </div>
  );
}

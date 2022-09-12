export default function Game(props) {
  const map = props.map;

  // const [gameState, dispatch] = useReducer(gameReducer, {
  //   status: "notStarted",
  //   score: 0,
  //   characters: map.characters,
  // });

  // function gameReducer(gameState, action) {
  //   switch (action.type) {
  //     //   case "selectedImage": {
  //     //     return {
  //     //       ...gameState,
  //     //       status: "gameReady",
  //     //     };
  //     //   }
  //     case "startedGame": {
  //       //startTimer();
  //       return {
  //         ...gameState,
  //         status: "searching",
  //         score: setInterval(() => {
  //           this.score = this.score + 1;
  //         }, 1000),
  //       };
  //     }
  //     case "clickedImage": {
  //       return {
  //         ...gameState,
  //         status: "selectingCharacter",
  //       };
  //     }
  //     case "selectedCharacter": {
  //       return {
  //         ...gameState,
  //         status: "awaitingResponse",
  //       };
  //     }
  //     case "finishedGame": {
  //       return {
  //         ...gameState,
  //         status: "gameCompleted",
  //       };
  //     }
  //     default:
  //       throw new Error();
  //   }
  // }

  return (
    <div className="game-container">
      <Hud map={map} score={score}></Hud>
      <GamePlay map={map} gameState={gameState} dispatch={dispatch}></GamePlay>
    </div>
  );
}

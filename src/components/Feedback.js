import React from "react";

export default function Feedback(props) {
  const { feedback } = props;

  switch (feedback) {
    // case "gameStarted":
    //   return (
    //     <div
    //       className="feedback"
    //       style={{
    //         backgroundColor: "black",
    //         color: "white",
    //         width: "200px",
    //         height: "200px",
    //       }}
    //     >
    //       <span>GAME STARTED</span>
    //     </div>
    //   );
    case "selectionCorrect":
      return (
        <div className="feedback correct">
          <span>GOOD JOB!</span>
        </div>
      );
    case "selectionIncorrect":
      return (
        <div className="feedback incorrect">
          <span>KEEP LOOKING.</span>
        </div>
      );
    default:
      return null;
  }
}

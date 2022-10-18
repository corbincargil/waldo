import React from "react";

export default function Feedback(props) {
  const { feedback } = props;

  switch (feedback) {
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

import React, { useEffect, useState } from "react";
import { animated, useTransition } from "@react-spring/web";
import { Link } from "react-router-dom";

export default function Completed(props) {
  const { gameStatus, score } = props;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (gameStatus === "completed") {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  });

  const fadeIn = useTransition(isVisible, {
    from: { x: 0, y: 1000, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1 },
    leave: { x: 1200, opacity: 0.1 },
  });

  return fadeIn((style, item) =>
    item ? (
      <animated.div className="completed" style={style}>
        <h1>Congratulations!</h1>
        <h3>
          Your score was
          <div className="final-score">
            <span>
              {` `}
              {("0" + Math.floor((score / 60000) % 60)).slice(-2)}:
            </span>
            <span>{("0" + Math.floor((score / 1000) % 60)).slice(-2)}.</span>
            <span>{("" + ((score / 10) % 100)).slice(-2)}</span>
          </div>
        </h3>
        <p>Please input your name to submit your score:</p>
        <div className="submit-score">
          <input
            type="text"
            placeholder="Your name here..."
            name="username"
            id="user-input"
            maxLength={18}
          />
          <button>Submit</button>
        </div>
        <div className="bottom-row">
          <button>Retry</button>
          <Link to={`/waldo/leaderboards`}>
            <button>Leaderboards</button>{" "}
          </Link>
        </div>
      </animated.div>
    ) : (
      ""
    )
  );
}

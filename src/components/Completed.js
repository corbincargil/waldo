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
    from: { x: 400, y: -500, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1 },
    leave: { x: 1200, opacity: 0.1 },
  });

  return fadeIn((style, item) =>
    item ? (
      <animated.div className="completed" style={style}>
        <h1>Congratulations!</h1>
        <h3>
          Your score was
          <span>
            {` `}
            {("0" + Math.floor((score / 60000) % 60)).slice(-2)}:
          </span>
          <span>{("0" + Math.floor((score / 1000) % 60)).slice(-2)}.</span>
          <span>{("" + ((score / 10) % 100)).slice(-2)}</span>
        </h3>
        <p>Please input your name to submit your score:</p>
        <div className="submit-score">
          <input type="text" name="username" id="user-input" />
          <button>Submit</button>
        </div>
        <div className="bottom-row">
          <button>Retry</button>
          <Link to={`/leaderboards`}>
            <button>View Leaderboards</button>{" "}
          </Link>
        </div>
      </animated.div>
    ) : (
      ""
    )
  );
}

import React, { useEffect, useState } from "react";
import { animated, useTransition } from "@react-spring/web";
import { Link, useNavigate } from "react-router-dom";
import { addNewScore } from "../firebase/initialize";

export default function Completed(props) {
  const { gameStatus, score } = props;
  const [isVisible, setIsVisible] = useState(false);
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewScore(username, score);
    navigate(`/waldo/leaderboards`);
  };

  const navigate = useNavigate();

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
        <form className="submit-score" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your name here..."
            name="username"
            id="user-input"
            maxLength={32}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <button>Submit</button>
        </form>
        <div className="bottom-row">
          <button
            onClick={() => {
              navigate(0);
            }}
          >
            Retry
          </button>
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

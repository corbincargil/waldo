import React, { useEffect, useState } from "react";
import { animated, useTransition } from "@react-spring/web";
import { Link } from "react-router-dom";
import { db, fetchLeaderboards } from "../firebase/initialize";
import { collection, snapshot } from "firebase/firestore";

export default function Leaderboards() {
  const [isVisible, setIsVisible] = useState(true);

  const [scores, setScores] = useState([]);

  // const sortScores = (arr, prop) => {
  //   arr.sort((a))
  // };

  useEffect(() => {
    async function loadLeaderboards() {
      let leaderboards = await fetchLeaderboards();
      leaderboards.sort((a, b) => {
        return a.score - b.score;
      });
      console.log(leaderboards);
      setScores(leaderboards);
    }
    loadLeaderboards();
  }, []);

  // const scores = [
  //   {
  //     username: "Uno",
  //     score: 32560,
  //     timestamp: "",
  //     id: "Cia1OasdrJh3EYLc5n",
  //   },
  //   {
  //     username: "Dos",
  //     score: 63560,
  //     timestamp: "",
  //     id: "Cia1Or92Hsadf3EYLc5n",
  //   },
  //   {
  //     username: "Tres",
  //     score: 63560,
  //     timestamp: "",
  //     id: "Cia1Or92HLrJasdfc5n",
  //   },
  //   {
  //     username: "Quatro",
  //     score: 63560,
  //     timestamp: "",
  //     id: "Ciaasd92HLrJh3EYLc5n",
  //   },
  //   {
  //     username: "Cinco",
  //     score: 63560,
  //     timestamp: "",
  //     id: "Cia1OasdfJh3EYLc5n",
  //   },
  //   {
  //     username: "Sies",
  //     score: 63560,
  //     timestamp: "",
  //     id: "Cia1Or92HLrasdfc5n",
  //   },
  // ];

  const fadeIn = useTransition(isVisible, {
    from: { x: -1000, y: 0, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1 },
  });

  return (
    <div className="leaderboards-container">
      <div className="header-container">
        <div className="header">
          <Link to={"/waldo/"}>
            <h1 id="leaderboard-header-h1">Where's Waldo</h1>
          </Link>
          <h3>Leaderboards</h3>
        </div>
      </div>
      <h1>Top Scores:</h1>
      <div>
        {fadeIn((style, item) =>
          item ? (
            <animated.div className="leaderboards" style={style}>
              <ol className="leaderboards-list">
                {scores
                  ? scores.map((user) => {
                      if (scores.indexOf(user) <= 2)
                        return (
                          <li className="list-item top-three" key={user.id}>
                            <span className="rank">
                              {scores.indexOf(user) + 1}.
                            </span>
                            <span className="username">{user.username}</span>
                            <div className="score">
                              <span>
                                {` `}
                                {(
                                  "0" + Math.floor((user.score / 60000) % 60)
                                ).slice(-2)}
                                :
                              </span>
                              <span>
                                {(
                                  "0" + Math.floor((user.score / 1000) % 60)
                                ).slice(-2)}
                                .
                              </span>
                              <span>
                                {("" + ((user.score / 10) % 100)).slice(-2)}
                              </span>
                            </div>
                          </li>
                        );
                      else
                        return (
                          <li className="list-item" key={user.id}>
                            <span className="rank">
                              {scores.indexOf(user) + 1}.
                            </span>
                            <span className="username">{user.username}</span>
                            <div className="score">
                              <span>
                                {` `}
                                {(
                                  "0" + Math.floor((user.score / 60000) % 60)
                                ).slice(-2)}
                                :
                              </span>
                              <span>
                                {(
                                  "0" + Math.floor((user.score / 1000) % 60)
                                ).slice(-2)}
                                .
                              </span>
                              <span>
                                {("" + ((user.score / 10) % 100)).slice(-2)}
                              </span>
                            </div>
                          </li>
                        );
                    })
                  : ""}
              </ol>
            </animated.div>
          ) : (
            ""
          )
        )}
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { animated, useTransition } from "@react-spring/web";
import { fetchLeaderboards } from "../firebase/initialize";

export default function DisplayLeaderboards(props) {
  const [scores, setScores] = useState([]);
  const map = props.map;
  console.log(map);

  const [isVisible] = useState(true);

  const fadeIn = useTransition(isVisible, {
    from: { x: -1000, y: 0, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1 },
  });

  useEffect(() => {
    async function loadLeaderboards(leaderboardRef) {
      let leaderboards = await fetchLeaderboards(leaderboardRef);
      leaderboards.sort((a, b) => {
        return a.score - b.score;
      });
      console.log(leaderboards);
      setScores(leaderboards);
    }
    loadLeaderboards(map.leaderboardRef);
  }, []);

  return (
    <div className="leaderboards-container">
      <h2>{map.name}</h2>
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

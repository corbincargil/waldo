import React, { useEffect, useState } from "react";
import { animated, useTransition } from "@react-spring/web";
import { Link } from "react-router-dom";
import { db, fetchLeaderboards } from "../firebase/initialize";
import DisplayLeaderboards from "../components/DisplayLeaderboards";
import { mapOne, mapTwo } from "../assets/maps";

export default function Leaderboards() {
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
      <DisplayLeaderboards map={mapOne} />
      <DisplayLeaderboards map={mapTwo} />
    </div>
  );
}

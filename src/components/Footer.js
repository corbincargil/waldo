import React from "react";
import githubBlack from "../assets/github-logo-black copy.png";

export default function Footer() {
  return (
    <div className="footer">
      <span>Created by </span>
      <span className="name">
        <a href="https://github.com/corbincargil">Corbin Cargil</a>
      </span>
      <a href="https://github.com/corbincargil">
        <img src={githubBlack} id="gh-logo" alt="Corbin's Github" />
      </a>
    </div>
  );
}

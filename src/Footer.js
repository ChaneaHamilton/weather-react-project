import React from "react";
import "./Footer.css";

export default function Weather() {
  return (
    <div className="footer">
      This project was coded by
      <a
        href="https://github.com/ChaneaHamilton"
        target="_blank"
        rel="noreferrer"
      >
        Chanea Hamilton
      </a>
      , is opened sourced on
      <a
        href="https://github.com/ChaneaHamilton/new-weather-app"
        rel="noreferrer"
        target="_blank"
      >
        Github
      </a>
      and hosted on
      <a
        href="https://chaneas-updated-weather-app.netlify.app/"
        rel="noreferrer"
        target="_blank"
      >
        Netlify
      </a>
    </div>
  );
}

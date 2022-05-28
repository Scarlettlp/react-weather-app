import "./App.css";
import Weather from "./Weather";
import React from "react";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          <a
            href="https://github.com/Scarlettlp/react-weather-app"
            target="_blank"
          >
            Open souce coded by
          </a>{" "}
          Scarlett Lara{" "}
        </footer>
      </div>
    </div>
  );
}

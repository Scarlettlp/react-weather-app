import "./App.css";
import Weather from "./Weather";
import React from "react";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Wageningen" />
        <footer>
          <a
            href="https://github.com/Scarlettlp/react-weather-app"
            rel="noopener noreferrer"
          >
            Open source coded
          </a>{" "}
          by Scarlett Lara{" "}
        </footer>
      </div>
    </div>
  );
}

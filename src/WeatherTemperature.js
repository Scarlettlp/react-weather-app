import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, SetUnit] = useState(props.celsius);

  function showFahrenheit(event) {
    event.preventDefault();
    SetUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    SetUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="Unit">
          {" "}
          °C |
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>{" "}
        </span>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(fahrenheit)}</span>
        <span className="unit">
          <a href="/" onClick={showCelsius}>
            °C
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
}

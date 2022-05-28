import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>

      <h1>Java</h1>
      <ul>
        <li>Sunday 07:09</li>
        <li>Mostly cloudy</li>
      </ul>

      <div className="row">
        <div className="col-6">
          <img
            src="https://duckduckgo.com/assets/weather/icons/clear-day.svg"
            alt="sunny"
          />
          30°
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: 76%</li>
            <li>Wind: 7km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

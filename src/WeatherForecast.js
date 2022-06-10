import React, { useState } from "react";
import "./ForecastStyle.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
      let [loaded,setLoaded]= useState(false);
      let [forecast, setForecast] = useState(null);
    

    function handleResponse(response) {
        setLoaded(true);
        setForecast(response.data.daily);
    }
 
  if (loaded) {
      return (
        <div className="WeatherForecast">
          <div className="row">
            <div className="col">
                <WeatherForecastDay data={forecast[0]}/>
             </div>
          </div>
        </div>
      );
  } else {
       let apiKey = `07d96326b2b0d1e158b7f53148d6afe5`;
       let longitude = props.coordinates.lon;
       let latitude = props.coordinates.lat;
       let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

       axios.get(apiUrl).then(handleResponse);
       
       return (null);
  }
}

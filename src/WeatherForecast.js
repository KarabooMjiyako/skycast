import React, { useState, useEffect } from "react";
import './WeatherForecast.css';
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }
  function handleError(error) {
    if (error.response) {
      console.error(
        "Server responded with error status:",
        error.response.status
      );
      console.error("Error data:", error.response.data);
    } else if (error.request) {
      console.error("No response received from the server");
    } else {
      console.error("Error setting up the request:", error.message);
    }
  }

  function load() {
    let apiKey = "0f8bc384a7c31b717a18cfe38a95ae06";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(url).then(handleResponse).catch(handleError);
  }

  if (loaded) {
    <div className="WeatherForecast">
      <div className="row">
        {forecast.map((dailyForecast, index) => {
          if (index < 5) {
            return (
              <div className="col" key={index}>
                <WeatherForecastDay data={dailyForecast} />
              </div>
            );
          } else {
            return null;
          }
        })}
        ;
      </div>
    </div>;
  } else {
    load();
  }
  return null;
}

import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";


export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weather, setWeather] = useState({});
  const [ready, setReady] = useState(false);

  function showWeather(response) {
    console.log(response.data);
    setWeather({
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
      city: response.data.name,
    });

    setReady(true);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function search() {
    const apiKey = "0f8bc384a7c31b717a18cfe38a95ae06";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(showWeather);
  }

  if (ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit} className="mb-3">
          <div className="row">
            <div className="col-8">
              <input
                type="search"
                id="search"
                onChange={updateCity}
                placeholder="Type a city"
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-4">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <WeatherInfo data={weather} />
        <hr />
        <WeatherForecast coordinates={weather.coordinates} />
      </div>
    );
  } else {
    search();
  }
  return "Loading...";
}

import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "New York",
    temperature: 19,
    date: "Tuesday 10:00",
    description: "Cloudy",

    humidity: 80,
    wind: 10,
  };
  return (
    <div className="Weather">
      <div className="weather-app">
        <header>
          <form>
            <input
              type="search"
              placeholder="Enter a city.."
              required
              className="search-input"
            />
            <input type="submit" value="Search" class="search-button" />
          </form>
        </header>
        <main>
          <div className="current-weather">
            <div>
              <h1 className="current-city">{weatherData.city}</h1>
              <p className="current-details">
                {weatherData.description}
                <br />
                Humidity: <strong>{weatherData.humidity}%</strong>, Wind:{" "}
                <strong>{weatherData.wind}km/h</strong>
              </p>
            </div>
            <div className="current-temperature">
              <span className="current-temperature-icon">☀️</span>
              <span className="current-temperature-value">
                {weatherData.temperature}
              </span>
              <span className="current-temperature-unit">°c</span>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

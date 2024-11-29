import React, { useState } from "react";
import axios from "axios";
import WeatherDetails from "./WeatherDetails";
import "./Weather.css";


const Weather = () => {
  const [city, setCity] = useState(""); 
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY; 

  const handleSearch = async (event) => {
    event.preventDefault();
    if (!city) {
      setError("Please enter a city name.");
      return;
    }

    try {
      setError(null);
      const response = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather`,
        {
          params: {
            q: city,
            appid: API_KEY,
            units: "metric",
          },
        }
      );
      setWeatherData(response.data);
    } catch (err) {
      setError("Could not fetch weather data. Check the city name.");
      setWeatherData(null);
    }
  };

  return (
    <div className="weather-search-container">
        <h1>Weather Forecast</h1>

        <p>Enter a city name to see the weather.</p>
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="search-input"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      {error && <p className="error-message">{error}</p>}
      {weatherData && <WeatherDetails data={weatherData} />}
    </div>
  );
};

export default Weather;

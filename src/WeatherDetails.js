import React from "react";
import PropTypes from "prop-types";
import "./WeatherDetails.css";

const WeatherDetails = ({ data }) => {
  const { name, main, weather, wind } = data;

  const iconUrl = `http://openweathermap.org/img/wn/${weather[0].icon}@4x.png`;

  return (
    <div className="card weather-card mx-auto my-4" style={{ maxWidth: "24rem" }}>
      <div className="card-body text-center">
        <h2 className="card-title">{name}</h2>
        <img
          src={iconUrl}
          alt={weather[0].description}
          className="img-fluid weather-icon"
        />
        <h4 className="card-text">Temperature: {main.temp}°C</h4>
        <p className="card-text text-muted">Condition: {weather[0].description}</p>
        <p className="card-text">Humidity: {main.humidity}%</p>
        <p className="card-text">Wind Speed: {wind.speed} m/s</p>
      </div>
    </div>
  );
  
};

WeatherDetails.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    main: PropTypes.shape({
      temp: PropTypes.number,
      humidity: PropTypes.number,
    }).isRequired,
    weather: PropTypes.arrayOf(
      PropTypes.shape({
        description: PropTypes.string,
        icon: PropTypes.string,
      })
    ).isRequired,
    wind: PropTypes.shape({
      speed: PropTypes.number,
    }).isRequired,
  }).isRequired,
};

export default WeatherDetails;

import React from "react";

function CurrentWeather({ weather }) {
  if (!weather || !weather.current || !weather.location) {
    return <p>No weather data available.</p>;
  }

  return (
    <div className="current-weather">
      <h2>Weather in {weather.location.name}, {weather.location.country}</h2>
      <p><strong>Temperature:</strong> {weather.current.temp_c} °C</p>
      <p><strong>Condition:</strong> {weather.current.condition.text}</p>
      <img src={weather.current.condition.icon} alt="weather icon" />
      <p><strong>Wind:</strong> {weather.current.wind_kph} kph</p>
      <p><strong>Feels like:</strong> {weather.current.feelslike_c} °C</p>
    </div>
  );
}

export default CurrentWeather;

import React, { useContext } from "react";
import { WeatherContext } from "../../context/WeatherContext";
import "./dashboard.scss";

function Dashboard() {
  const { weatherData } = useContext(WeatherContext);

  return (
    <div className="dashboard">
      <h2>Weather Dashboard</h2>
      {weatherData ? (
        <div className="weather-info">
          <h3>{weatherData.name}</h3>
          <p>Temperature:🌡️ {weatherData.main.temp}°C</p>
          <p>Condition: 🌤️ {weatherData.weather[0].description}</p>
          <p>Humidity: 💦 {weatherData.main.humidity}%</p>
          <p>Wind Speed:🌪️ {weatherData.wind.speed} m/s</p>
        </div>
      ) : (
        <p>No data available. Please search for a city.</p>
      )}
    </div>
  );
}

export default Dashboard;

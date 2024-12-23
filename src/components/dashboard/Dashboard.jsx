import React, { useContext, useEffect } from "react";
import { WeatherContext } from "../../context/WeatherContext.jsx";

function Dashboard() {
  const { weatherData, fetchWeatherData, error } = useContext(WeatherContext);
  // Quando il componente viene montato, facciamo una chiamata per ottenere i dati per una città
  useEffect(() => {
    console.log("Effettuando la chiamata per Roma...");
    fetchWeatherData("Rome"); // Chiamata API per la città di Roma
  }, []); // Dipendenza vuota per chiamarla solo una volta quando il componente si monta
  console.log(weatherData);
  // Verifica se i dati per la città sono stati caricati
  const cityWeather = weatherData["Rome"];

  return (
    <div>
      <h1>Weather Dashboard</h1>
      {error ? (
        <p style={{ color: "red" }}>Errore: {error}</p> // Mostra l'errore se presente
      ) : (
        <>
          <p>City: Rome</p>
          {cityWeather ? (
            <div>
              <p>Temperature: {cityWeather.main.temp}°K</p>
              <p>Weather: {cityWeather.weather[0].description}</p>
              <p>Humidity: {cityWeather.main.humidity}%</p>
              <p>Wind Speed: {cityWeather.wind.speed} m/s</p>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </>
      )}
    </div>
  );
}

export default Dashboard;

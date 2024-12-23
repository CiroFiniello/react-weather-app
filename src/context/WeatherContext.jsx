// src/context/WeatherContext.jsx
import React, { createContext, useState, useEffect } from "react";

// Creiamo il contesto
const WeatherContext = createContext();

// Il provider che fornisce il contesto ai componenti figli
const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState({});
  const [error, setError] = useState(null); // Stato per gestire gli errori

  // Funzione per ottenere i dati meteo
  const fetchWeatherData = async (city) => {
    try {
      const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;
      console.log("API Key:", apiKey);
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
      );
      if (!response.ok) {
        throw new Error(`Errore nell'API: ${response.statusText}`);
      }
      const data = await response.json();
      console.log("Dati meteo ricevuti:", data); // Visualizza i dati ricevuti
      setWeatherData((prevState) => ({
        ...prevState,
        [city]: data,
      }));
    } catch (error) {
      console.error("Errore durante la chiamata API:", err);
      setError(err.message); // Imposta il messaggio di errore
    }
  };

  // Restituiamo il contesto con i dati e la funzione per aggiornarli
  return (
    <WeatherContext.Provider value={{ weatherData, fetchWeatherData, error }}>
      {children}
    </WeatherContext.Provider>
  );
};

// Esportiamo i componenti come named exports
export { WeatherContext, WeatherProvider };

// src/context/WeatherContext.js
import React, { createContext, useState, useEffect } from "react";

// Creiamo il contesto
const WeatherContext = createContext();

const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState({});

  // Funzione per ottenere i dati meteo
  const fetchWeatherData = async (city) => {
    // Inserire qui la logica per chiamare l'API di OpenWeather e aggiornare lo state
  };

  // Il provider fornisce il contesto ai componenti figli
  return (
    <WeatherContext.Provider value={{ weatherData, fetchWeatherData }}>
      {children}
    </WeatherContext.Provider>
  );
};

export { WeatherContext, WeatherProvider };

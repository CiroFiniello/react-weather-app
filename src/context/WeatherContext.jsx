// src/context/WeatherContext.jsx
import React, { createContext, useState, useEffect } from "react";

// Creiamo il contesto
const WeatherContext = createContext();

// Il provider che fornisce il contesto ai componenti figli
const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState({});

  // Funzione per ottenere i dati meteo
  const fetchWeatherData = async (city) => {
    const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    );
    const data = await response.json();
    setWeatherData((prevState) => ({
      ...prevState,
      [city]: data,
    }));
  };

  // Restituiamo il contesto con i dati e la funzione per aggiornarli
  return (
    <WeatherContext.Provider value={{ weatherData, fetchWeatherData }}>
      {children}
    </WeatherContext.Provider>
  );
};

// Esportiamo i componenti come named exports
export { WeatherContext, WeatherProvider };

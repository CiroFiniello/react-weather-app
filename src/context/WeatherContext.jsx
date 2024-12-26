import React, { createContext, useState } from "react";

// Crea il contesto
export const WeatherContext = createContext();

// Crea il provider
export const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeatherData = async (city) => {
    const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Errore nella chiamata API");
      }
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <WeatherContext.Provider value={{ weatherData, fetchWeatherData }}>
      {children}
    </WeatherContext.Provider>
  );
};

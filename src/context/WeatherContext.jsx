// src/context/WeatherContext.js
import React, { createContext, useState } from "react";

// Creiamo il contesto
export const WeatherContext = createContext();

const WeatherProvider = ({ children }) => {
  // Definiamo lo stato che vogliamo condividere
  const [cities, setCities] = useState([
    { id: "Rome", name: "Roma" },
    { id: "Milan", name: "Milano" },
    { id: "Naples", name: "Napoli" },
    { id: "Turin", name: "Torino" },
    { id: "Palermo", name: "Palermo" },
  ]);
  const [cityWeather, setCityWeather] = useState(null);

  // // Funzione per cercare le informazioni della città
  // const getCityWeather = async (id) => {
  //   const apiKey = 'TUA_API_KEY';
  //   const response = await fetch(
  //     `http://api.openweathermap.org/data/2.5/weather?q=${id}&appid=${apiKey}&units=metric&lang=it`
  //   );
  //   const data = await response.json();
  //   setCityWeather(data);
  // };

  // Il provider fornisce il contesto ai componenti figli
  return (
    <WeatherContext.Provider value={{ cities, cityWeather }}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;

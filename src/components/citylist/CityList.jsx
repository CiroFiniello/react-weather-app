import React, { useContext, useEffect } from "react";
import { WeatherContext } from "../context/WeatherContext";
import { Link } from "react-router-dom";

const cities = ["Rome", "Milan", "Naples", "Turin", "Palermo"];

const CityList = () => {
  const { fetchWeatherData } = useContext(WeatherContext);

  useEffect(() => {
    cities.forEach((city) => fetchWeatherData(city));
  }, [fetchWeatherData]);

  return (
    <div>
      <h2>Italian Cities</h2>
      <ul>
        {cities.map((city) => (
          <li key={city}>
            <Link to={`/city/${city}`}>{city}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CityList;

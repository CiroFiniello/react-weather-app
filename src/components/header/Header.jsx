import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { WeatherContext } from "../../context/WeatherContext";
import "./header.scss";

function Header() {
  const { fetchWeatherData } = useContext(WeatherContext);
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const cities = [
    "Rome",
    "Milan",
    "Naples",
    "Turin",
    "Palermo",
    "Genoa",
    "Bologna",
    "Florence",
    "Catania",
    "Venice",
    "Verona",
    "Messina",
    "Padua",
    "Trieste",
    "Brescia",
    "Parma",
    "Taranto",
    "Prato",
    "Modena",
    "Reggio Calabria",
    "Reggio Emilia",
    "Perugia",
    "Ravenna",
    "Livorno",
    "Cagliari",
    "Foggia",
    "Rimini",
    "Salerno",
    "Ferrara",
    "Sassari",
    "Latina",
    "Giugliano in Campania",
    "Monza",
    "Siracusa",
    "Pescara",
    "Bergamo",
    "Forlì",
    "Trento",
    "Vicenza",
    "Terni",
    "Novara",
    "Ancona",
    "Arezzo",
    "Udine",
    "Bolzano",
    "Piacenza",
    "La Spezia",
    "Pesaro",
    "Cesena",
    "Lecce",
    "Alessandria",
    "Pisa",
    "Lucca",
    "Catanzaro",
    "Brindisi",
    "Pistoia",
    "Barletta",
    "Trapani",
    "Mestre",
    "Pavia",
    "Cremona",
    "Treviso",
    "Marsala",
    "Varese",
    "Sesto San Giovanni",
    "Pozzuoli",
    "Casoria",
    "Gela",
    "Scafati",
    "Cinisello Balsamo",
    "Ragusa",
    "Sesto Fiorentino",
    "Caserta",
    "Guidonia Montecelio",
    "Cosenza",
    "Potenza",
    "Viterbo",
    "Asti",
    "Vittoria",
    "Matera",
    "Caltanissetta",
    "Carrara",
    "Savona",
    "Vibo Valentia",
    "Rovigo",
    "Chieti",
    "Avellino",
    "L'Aquila",
    "Imperia",
    "Benevento",
    "Trapani",
    "Massa",
    "Crotone",
    "Agrigento",
    "Caltagirone",
    "Viareggio",
    "Gorizia",
    "Busto Arsizio",
    "Foligno",
    "Bisceglie",
    "Pordenone",
    "San Severo",
    "Battipaglia",
    "Ercolano",
    "Carpi",
    "Aversa",
    "Portici",
    "Cava de' Tirreni",
    "Cerignola",
    "Bagheria",
    "Sesto Fiorentino",
    "Altamura",
    "San Benedetto del Tronto",
    "Busto Arsizio",
  ];
  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (value) {
      setSuggestions(
        cities.filter((city) =>
          city.toLowerCase().startsWith(value.toLowerCase())
        )
      );
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (city) => {
    setQuery(city);
    setSuggestions([]);
    fetchWeatherData(city); // Esegui la chiamata API per la città selezionata
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeatherData(query); // Esegui la chiamata API per la query inserita
  };
  return (
    <header>
      <h1>Weather App</h1>
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
        </ul>
        <form onSubmit={handleSubmit} className="search-form">
          <input
            type="text"
            value={query}
            onChange={handleInputChange}
            placeholder="Search for a city..."
          />
          {suggestions.length > 0 && (
            <ul className="suggestions">
              {suggestions.map((city, index) => (
                <li key={index} onClick={() => handleSuggestionClick(city)}>
                  {city}
                </li>
              ))}
            </ul>
          )}
        </form>
        <ul className="nav-links">
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

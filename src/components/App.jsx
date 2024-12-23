import { createContext, useState } from "react";
import "./App.css";

//creiamo il contesto
export const WeatherContext = createContext();

const WeatherProvider = ({ children }) => {
  //definiamo lo stato che vogliamo condividere
  const [cities, setCities] = useState([
    { id: "Rome", name: "Roma" },
    { id: "Milan", name: "Milano" },
    { id: "Naples", name: "Napoli" },
    { id: "Turin", name: "Torino" },
    { id: "Palermo", name: "Palermo" },
  ]);
  const [cityWeather, setCityWeather] = useState(null);
};
function App() {
  return <h1>io sono l'app principale</h1>;
}

export default App;

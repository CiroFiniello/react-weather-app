import { createRoot } from "react-dom/client";
import WeatherProvider from "./context/WeatherContext.jsx"; // Importa il provider
import App from "./components/App.jsx";

createRoot(document.getElementById("root")).render(
  <WeatherProvider>
    <App />
  </WeatherProvider>
);

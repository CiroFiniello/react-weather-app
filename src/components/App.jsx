import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./header/Header.jsx";
import Dashboard from "./dashboard/Dashboard.jsx";
import CityWeather from "./cityweather/CityWeather.jsx";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/home" component={Dashboard} />
        <Route path="/city/:id" element={<CityWeather />} />
      </Routes>
    </Router>
  );
}

export default App;

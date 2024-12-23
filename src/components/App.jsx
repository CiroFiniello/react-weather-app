import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./header/Header.jsx";
import Dashboard from "./dashboard/Dashboard.jsx";
import CityWeather from "./cityweather/CityWeather.jsx";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/home" component={Dashboard} />
        <Route path="/city/:id" component={CityWeather} />
      </Switch>
    </Router>
  );
}

export default App;

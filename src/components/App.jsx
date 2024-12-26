import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "../context/ThemeContext.jsx";
import Header from "./header/Header.jsx";
import Dashboard from "./dashboard/Dashboard.jsx";
import About from "../pages/about/About.jsx";
import Favorites from "../pages/favorites/Favorites.jsx";
import Contact from "../pages/contact/Contact.jsx";
import "./App.scss";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/home" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;

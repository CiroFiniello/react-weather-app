import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header>
      <h1>Weather App</h1>
      <nav>
        <Link to="/home">Home</Link>
      </nav>
    </header>
  );
}

export default Header;

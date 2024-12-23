import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header>
      <h1>Weather App</h1>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          {/* <li><Link to="/city/1">City 1</Link></li> */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;

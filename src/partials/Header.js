import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => (
  <header>
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <Link to="/" className="navbar-brand">
        SWAPI Graph Explorer
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink exact to="/" className="nav-link">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/people" className="nav-link">
              People
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/planets" className="nav-link">
              Planets
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/starships" className="nav-link">
              Starships
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Header;

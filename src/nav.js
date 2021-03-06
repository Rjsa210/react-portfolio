import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './styles.css';

function Nav() {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-light transparent">
    <Link to="/" className={"nav-link active"}>
          RTJ Design
        </Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
          About
        </Link>
        </li>
        <li className="nav-item">
        <Link to="/portfolio" className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>
          Portfolio
        </Link>
        </li>
        <li className="nav-item">
        <Link to="/contact" className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
          Contact
        </Link>
        </li>
      </ul>

    </div>
  </nav>

  )
}

export default Nav;
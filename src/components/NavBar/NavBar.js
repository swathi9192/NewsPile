import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.sass";
import logo from "../../logo.png";

class NavBar extends React.Component {
  render() {
    return (
      <nav
        className="navbar is-light"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            <img src={logo} className="appLogo"></img>
          </Link>
          <div
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navBarItems"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </div>
        </div>
        <div id="navBarItems" className="navbar-menu">
          <div className="navbar-start">
            <Link to="/home" className="navbar-item">
              Home
            </Link>
          </div>

          <div className="navbar-end">
            <Link to="/login" className="navbar-item">
              Login
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;

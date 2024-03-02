// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import logo from "../images/connectgenlogo.png";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="logo"></img>
          <span style={{ color: "#67cac9" }}>CG</span>
          <span style={{ color: "#b5cace" }}>Insurance</span>
        </Link>
        <ul className="navbar-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Life Insurance</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

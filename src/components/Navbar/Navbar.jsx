// Navbar.jsx

import React from "react";
import styles from "./Navbar.module.css";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <NavLink to="/">
          <img src={logo} alt="Logo" />
        </NavLink>
      </div>
      <div className={styles.menu}>
        <ul>
          <li>
            <NavLink
              className={({ isActive }) => `${isActive ? styles.active : ""}`}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => `${isActive ? styles.active : ""}`}
              to="/services"
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => `${isActive ? styles.active : ""}`}
              to="/contact-us"
            >
              Contact Us
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => `${isActive ? styles.active : ""}`}
              to="/about-us"
            >
              About Us
            </NavLink>
          </li>
        </ul>
      </div>
      <div className={styles.actions}>
        <button className={styles.loginButton}>Login</button>
        <span className={styles.searchIcon}>🔍</span>
      </div>
    </div>
  );
};

export default Navbar;

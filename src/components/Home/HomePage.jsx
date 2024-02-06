// Home.js

import React from "react";
import styles from "./HomePage.module.css";
import ProductCard from "../Cards/ProductCard";
import { NavLink } from "react-router-dom";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <h1>Welcome to Our Website</h1>
        <p>Discover amazing content and products.</p>
        <NavLink to="/services">
          <button className={styles.ctaButton}>Learn More</button>
        </NavLink>
      </div>
      <div className={styles.cardSection}>
        <ProductCard />
      </div>
    </div>
  );
};

export default HomePage;

// Footer.js

import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p>© 2024 Your Company. All rights reserved.</p>
        <div className={styles.socialIcons}>
          <a href="#facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#twitter">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#linkedin">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="#instagram">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

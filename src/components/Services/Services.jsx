// Services.js

import React from "react";
import styles from "./Services.module.css";

const Services = () => {
  return (
    <div className={styles.services}>
      <h2>Our Services</h2>
      <div className={styles.allServices}>
        <div className={styles.service}>
          <img
            src="https://picsum.photos/id/1/300/500"
            alt="Web App Development"
          />
          <h3>Web App Development</h3>
          <p>We create responsive web applications tailored to your needs.</p>
        </div>
        <div className={styles.service}>
          <img
            src="https://picsum.photos/id/3/200/300"
            alt="Android App Development"
          />
          <h3>Android App Development</h3>
          <p>Build native Android applications for smartphones and tablets.</p>
        </div>
        <div className={styles.service}>
          <img src="https://picsum.photos/id/10/200/300" alt="UI/UX Design" />
          <h3>UI/UX Design</h3>
          <p>
            Create visually stunning and user-friendly interfaces for your
            products.
          </p>
        </div>
        {/* Add four more services */}
        <div className={styles.service}>
          <img src="https://picsum.photos/id/6/200/300" alt="Custom Service" />
          <h3>Custom Service</h3>
          <p>Tailored solutions to meet your specific requirements.</p>
        </div>
      </div>
      {/* Add more services as needed */}
    </div>
  );
};

export default Services;

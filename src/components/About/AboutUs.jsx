// AboutUs.js

import React from "react";
import styles from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.imageArea}>
        <img
          src="https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU"
          alt="Developer"
          className={styles.image}
        />
      </div>
      <div className={styles.textArea}>
        <h2>About the Developer</h2>
        <p>
          John Doe is a passionate and dedicated software developer with several
          years of experience in the field. He specializes in web development
          and has expertise in frontend technologies such as React.js, HTML,
          CSS, and JavaScript. John is committed to creating high-quality,
          user-friendly web applications that meet the needs of clients and
          users alike. He is constantly learning and exploring new technologies
          to stay up-to-date with the latest trends and best practices in the
          industry. In addition to his technical skills, John is also a team
          player who enjoys collaborating with others to solve complex problems
          and deliver exceptional results. He values communication,
          transparency, and continuous improvement, both in his work and
          personal development. John is currently seeking new opportunities to
          contribute his skills and expertise to innovative projects and make a
          positive impact in the world of technology.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;

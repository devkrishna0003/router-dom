import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { AboutUs, ContactForm, HomePage, Services } from "./components";

const App = () => {
  return (
    <>
      <Navbar />
      <HomePage />
      <Services />
      <ContactForm />
      <AboutUs />
    </>
  );
};

export default App;

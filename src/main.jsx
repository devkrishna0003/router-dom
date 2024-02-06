import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./global.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import {
  AboutUs,
  ContactForm,
  HomePage,
  Services,
} from "./components/index.js";
import Layout from "./Layout.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<Layout />}>
      <Route path="" element={<HomePage />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact-us" element={<ContactForm />} />
      <Route path="/about-us" element={<AboutUs />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

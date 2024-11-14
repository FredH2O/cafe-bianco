import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "swiper/css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap";
import "sticky-js";
import "./assets/custom.css";
import "animate.css";
import "lodash";
import "leaflet/dist/leaflet.css";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Performance measurement (optional)
reportWebVitals();

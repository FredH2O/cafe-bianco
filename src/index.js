import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "swiper/css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"; // Bootstrap JS
import "sticky-js"; // Assuming Sticky.js is used in custom JS
import "./assets/tooplate-barista.css"; // Template-specific CSS

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

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// Import Swiper CSS (correct path)
import "swiper/css";

// Import Bootstrap CSS (no need for Bootstrap JS if you aren't using jQuery-dependent components)
import "bootstrap/dist/css/bootstrap.min.css";

// Import jQuery and Bootstrap JS if needed
import "bootstrap"; // Bootstrap JS

// Import Sticky.js and other custom JS
import "sticky-js"; // Assuming Sticky.js is used in custom JS
import "./assets/custom.js"; // Custom JS file that uses jQuery and Sticky.js
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

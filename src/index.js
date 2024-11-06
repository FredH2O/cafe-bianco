import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// Import jQuery, Bootstrap, and Sticky.js
import $ from "jquery"; // Import jQuery
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "bootstrap"; // Import Bootstrap JS (includes jQuery and Popper.js)

import "sticky-js"; // Import Sticky.js

// Custom JavaScript
import "./assets/custom.js"; // Assuming custom.js uses jQuery and Sticky.js
import "./assets/tooplate-barista.css"; // Your specific template CSS

import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

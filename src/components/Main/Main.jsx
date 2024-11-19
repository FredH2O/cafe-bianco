import { useLocation } from "react-router-dom"; // Import hook to get current path
import Barista from "../Barista/Barista.jsx";
import Hero from "../Hero/Hero";
import About from "../About/About";
import Menu from "../Menu/Menu.jsx";
import Reviews from "../Reviews/Reviews";
import Contact from "../Contact/Contact";
import { Routes, Route } from "react-router-dom";
import AnimatedRoute from "./AnimatedRoute"; // Adjust the path as needed
import Reservation from "../Reservation/Reservation.jsx";

function Main() {
  const location = useLocation(); // Get the current location

  return (
    <main>
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <AnimatedRoute>
              <Hero />
            </AnimatedRoute>
          }
        />
        <Route
          path="/about"
          element={
            <AnimatedRoute>
              <About />
            </AnimatedRoute>
          }
        />
        <Route
          path="/barista"
          element={
            <AnimatedRoute>
              <Barista />
            </AnimatedRoute>
          }
        />
        <Route
          path="/menu"
          element={
            <AnimatedRoute>
              <Menu />
            </AnimatedRoute>
          }
        />
        <Route
          path="/reviews"
          element={
            <AnimatedRoute>
              <Reviews />
            </AnimatedRoute>
          }
        />
        <Route
          path="/contact"
          element={
            <AnimatedRoute>
              <Contact />
            </AnimatedRoute>
          }
        />
        <Route
          path="/reservation"
          element={
            <AnimatedRoute>
              <Reservation />
            </AnimatedRoute>
          }
        />
      </Routes>
    </main>
  );
}

export default Main;

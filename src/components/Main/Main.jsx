import Barista from "../Barista/Barista.jsx";
import Hero from "../Hero/Hero";
import About from "../About/About";
import Menu from "../Menu/Menu.jsx";
import Reviews from "../Reviews/Reviews";
import Contact from "../Contact/Contact";
import { Routes, Route } from "react-router-dom";

function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/barista" element={<Barista />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
  );
}

export default Main;

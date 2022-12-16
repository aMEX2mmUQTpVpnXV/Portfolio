import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Credits from "../pages/Credits";
import RoyalRoad from "../pages/RoyalRoad/src/RoyalRoad";
import Personas from "../pages/Personas/Personas";

export default function Navigation() {
  return (
    <div>
      <Router basename="/Portfolio">
        <Routes>
          <Route path="/Portfolio/home" element={<Home />} />
          <Route path="/Portfolio/about" element={<About />} />
          <Route path="/Portfolio/projects" element={<Projects />} />
          <Route path="/Portfolio/credits" element={<Credits />} />
          <Route path="/Portfolio/royal-road" element={<RoyalRoad />} />
          <Route path="/Portfolio/personas" element={<Personas />} />
          <Route path="/Portfolio" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

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
          <Route exact path="/Portfolio/home" element={<Home />} />
          <Route exact path="/Portfolio/about" element={<About />} />
          <Route exact path="/Portfolio/projects" element={<Projects />} />
          <Route exact path="/Portfolio/credits" element={<Credits />} />
          <Route exact path="/Portfolio/royal-road" element={<RoyalRoad />} />
          <Route exact path="/Portfolio/personas" element={<Personas />} />
          <Route exact path="/Portfolio" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

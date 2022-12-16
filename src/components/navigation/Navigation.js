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
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/credits" element={<Credits />} />
          <Route path="/royal-road" element={<RoyalRoad />} />
          <Route path="personas" element={<Personas />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

// Main.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import { Footer } from "./Footer";
import Components1 from "../containers/LandingPage/components1/Index";
import Components2 from "../containers/LandingPage/components2/Index";
import Components3 from "../containers/LandingPage/components3";
import Components4 from "../containers/LandingPage/components4";
import Components5 from "../containers/LandingPage/components5";
import Components6 from "../containers/LandingPage/components6";
import ContactIndex from "../containers/contacts/index";

const Main = () => {
  return (
    <Router>
      <div>
        <Header />

        {/* Initial content between Header and Footer */}
        <Routes>
          <Route path="/Components1" element={<Components1 />} />
          <Route path="/Components2" element={<Components2 />} />
        </Routes>

        {/* Dynamic content based on menu clicks */}
        <Routes>
          <Route path="/Components3" element={<Components3 />} />
          <Route path="/Components4" element={<Components4 />} />
          <Route path="/Components5" element={<Components5 />} />
          <Route path="/Components6" element={<Components6 />} />
          <Route path="/Contact" element={<ContactIndex />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default Main;

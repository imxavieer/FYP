import Navbar from "./components/Navbar";
import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Menu from "./pages/menu";
import Contact from "./pages/contact";
import Reserve from "./pages/reserve";
import CancelReservation from "./pages/cancelreservation";
import { browserHistory } from "react-router";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Home />
        <About />
        <Menu />
        <Contact />
        <Routes>
          {/* {/* <Route path="/" elment={<Home />} /> */}
          {/* <Route path="/about" elment={<About />} />  */}
          <Route path="/reserve" element={<Reserve />} />
          <Route path="/reserve/cancel/:reservationId" element={<CancelReservation/>}/>
        </Routes>
      </Router>
    </>
  );
  const location = useLocation();
  const [showFilter, setShowFilter] = useState(false);
}

export default App;

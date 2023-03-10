import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Navbar from "./components/general/navbar/Navbar";
import PopupPrompt from "./components/general/popupprompt/PopupPrompt";
import Footer from "./components/general/footer/Footer"

import LandingPage from "./pages/landingpage/LandingPage";
import Reserve from "./pages/reservationpage/reserve";

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<LandingPage />} />

                    <Route
                        path="/reserve"
                        element={<Reserve />}
                    />
                </Routes>
                <PopupPrompt />
                <Footer/>
            </Router>
        </>
    );
}

export default App;

import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CancelReservation from "./pages/reservations/cancelreservation/cancelreservation";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route
                        path="/reservation/cancel/:reservationId"
                        element={<CancelReservation />}
                    />
                </Routes>
            </Router>
        </>
    );
}

export default App;

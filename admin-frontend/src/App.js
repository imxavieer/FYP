import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ViewReservation from "./pages/reservations/viewreservation/viewReservation";
import CancelReservation from "./pages/reservations/cancelreservation/cancelreservation";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="reservation">
                        <Route
                            path="cancel/:reservationId"
                            element={<CancelReservation />}
                        />
                        <Route
                            path="view/:reservationId"
                            element={<ViewReservation />}
                        />
                    </Route>
                </Routes>
            </Router>
        </>
    );
}

export default App;

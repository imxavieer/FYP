// ===========================express and router===========================
const express = require("express");
const router = express.Router();

// ===========================import routes===========================
const {
    createReservation,
    getAllReservations,
    getReserationById,
    getReservationsByDateTime,
    getReservationsByTableId,
    updateReservation,
    deleteReservation,
} = require("../Controllers/ReservationController")

// =========================Create=========================
// 1) Create reservation
// takes in Reservation object (refer to reservation model) in body
router.post("/",createReservation);

// =========================Read=========================
// 1) View all reservartions
router.get("/",getAllReservations)

// 2) Get reservation by ID 
// takes in reservationId as parameter
router.get("/id/:reservationId",getReserationById)

// 3) Get reservation by Date Time (Year, Month, Day)
// called when user changes date/timeslot/table in the input (creating resercation)
// takes in Date() object in the body
router.get("/date/",getReservationsByDateTime)

// 4) Get reservation by Table Number 
// takes in tableId in the body
router.get("/tableId/:tableId",getReservationsByTableId)

// =========================Update=========================
// 1) Update reservation details
// takes in reservationId as parameter
// takes in Reservation object (refer to reservation model) in body
// this just updates the reservation details (status, etc)
router.put("/:reservationId",updateReservation)

// =========================Delete=========================
// 1) Delete reservation
// takes in reservationId as parameter
router.delete("/:reservationId",deleteReservation)


// ===========================import routes===========================

module.exports = router;
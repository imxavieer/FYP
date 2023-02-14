const express = require("express");

const { check } = require("express-validator");

const router = express.Router();

const ReservationController = require("../Controllers/ReservationController");

router.post(
    "/timing",
    [check("date").not().isEmpty(), check("pax").not().isEmpty()],
    ReservationController.getAvailableTiming
);

router.post("/", [], ReservationController.createReservation);

router.post("/confirm",[],ReservationController.testEmailConfirmation)

module.exports = router;

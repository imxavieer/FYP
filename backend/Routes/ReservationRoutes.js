const express = require("express");

const { check } = require("express-validator");

const router = express.Router();

const ReservationController = require("../Controllers/ReservationController");

router.post(
    "/timing",
    [check("date").not().isEmpty(), check("pax").not().isEmpty()],
    ReservationController.findAvailableTiming
);
router.get("/:reservationId", [], ReservationController.getReservationById);
router.post("/", [], ReservationController.createReservation);

router.post("/confirm", [], ReservationController.testEmailConfirmation);

router.delete("/:reservationId", [], ReservationController.cancelReservation);

module.exports = router;

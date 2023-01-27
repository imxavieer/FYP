const express = require('express');

const { check } = require('express-validator');

const router = express.Router();

const ReservationController = require('../Controllers/ReservationController');


router.get('/timing', [
    check('date').not().isEmpty(),
    check('pax').not().isEmpty()
    ] , 
    ReservationController.getAvailableTiming);


    

module.exports = router;

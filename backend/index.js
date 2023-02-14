const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// ==================configure app settings==================
app.use(cors());
app.use(bodyParser.json());

app.use((req , res , next) => {
    res.setHeader('Access-Control-Allow-Origin' , '*' );
    res.setHeader('Access-Control-Allow-Headers' , 'Origin , X-Requested-With , Content-Type , Accept');
    res.setHeader('Access-Control-Allow-Methods' , 'GET , POST , PATCH , DELETE');
    next();
});




const ReservationRoute = require('./Routes/ReservationRoutes');

// ==================use routes==================
app.use("/api/reservation", ReservationRoute);
app.use((error, req, res, next) => {
    res.status(error.code || 500);
    res.json({ message: error.message || "An unknown error occurred" });
});

// ==================initialise==================
mongoose
    .connect(process.env.DATABASE_URL)
    .then(() => {
        app.listen(8000);
        console.log("Connected Successfully");
    })
    .catch((error) => {
        console.log(error);
    });

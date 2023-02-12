// ==================imports==================
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// ==================configure app settings==================
app.use(cors());
app.use(bodyParser.json());

const ReservationRoute = require("./Routes/ReservationRoutes");

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

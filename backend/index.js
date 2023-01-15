// ==================imports==================
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

// ==================configure a[p settings==================
app.use(cors());
app.use(express.json());

// ==================connect to mongoose==================
async function connect() {
    try {
        await mongoose.connect(process.env.DATABASE_URL);
        console.log("Connected");
    } catch (error) {
        console.log(error);
    }
}

connect();

// ==================use the routes==================
// =========test routes=========
app.get("/api", (req, res) => {
    res.send("This is working");
});

// =========reservation routes=========
app.use("/api/reservations", require("./Routes/ReservationRoutes"));
// =========table routes=========
app.use("/api/tables", require("./Routes/TableRoutes"));

// ==================port listeneer==================
app.listen(8000, () => {
    console.log("OK");
});

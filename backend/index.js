const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const app = express();

app.use(bodyParser.json());

const ReservationRoute = require('./Routes/ReservationRoutes');

app.use(ReservationRoute);

app.use( (error, req , res , next) => {
    res.status(error.code || 500);
    res.json({message: error.message || "An unknown error occurred"});
});


mongoose
    .connect('mongodb+srv://sanghil:1058022a@cluster0.ahpmxxy.mongodb.net/FYP?retryWrites=true&w=majority')
    .then( () => {
        app.listen(5000);
        console.log('Connected Successfully');
    } )
    .catch(error => {
        console.log(error);
    });
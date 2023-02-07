const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Reservation = new Schema({
    email: {type: String , required: true},
    name: {type: String , required: true},
    pax: {type: Number , required: true},
    date_of_visit: {type: String , required: true},
    table_id: {type: Array , required: true},
    status: {type: Number , required: true},
});



module.exports = mongoose.model('Reservation' , Reservation);



const mongoose = require("mongoose");
const reservationSchema = mongoose.Schema({
    // number of people that will be present for reserved slot
    noOfPax: {
        type: Number,
        required: true,
    },

    // date and time which the reservation slot starts (DateTime object)
    date: {
        type: Date,
        required: true,
    },

    // name of the customer that is making the reservation
    name: {
        type: String,
        required: true,
    },

    // email of the customer that is making the reservation
    email: {
        type: String,
        required: true,
    },

    // tableId of the table that the customer intends to reserve
    tableId: {
        type: String,
        required: true,
    },

    // table number of table the customer reserved for a given slot
    tableNo: {
        type: Number,
        required: true,
    },
    
});

module.exports = mongoose.model("Reseration", reservationSchema);

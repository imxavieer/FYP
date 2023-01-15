const mongoose = require("mongoose");
const tableSchema = mongoose.Schema({
    // the table number (the label for customer to see)
    tableNo: {
        type: Number,
        required: true,
    },

    // number of people the table can accomodate
    noOfPax: {
        type: Number,
        required: true,
    },
});

module.exports = mongoose.model("Table", tableSchema);

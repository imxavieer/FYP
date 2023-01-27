// =========================Import schema=========================
const Reservation = require("../Models/ReservationModel");

// =========================Create=========================
// 1) Create reservation
const createReservation = async (req, res) => {
    // table object consists of tableId and tableNo
    const { name, email, noOfPax, table } = req.body;
    const { tableId, tableNo } = table;
    try {
        // check if name and email are filled in
        if (!name || !email) {
            return res.status(400).json({
                message: "Name and email cannot be empty!",
            });
        }
        // check if no of pax is empty or 0
        if (!noOfPax || noOfPax == 0) {
            return res.status(400).json({
                message: "No of pax cannot be empty or 0!",
            });
        }
        // check if table is filled in (takes in table object)
        if (!table) {
            return res.status(400).json({
                message: "Table cannot be empty",
            });
        }

        // for testing purposes; it takes in date time from frontend in production
        const date = new Date(2023, 0, 15, 11);
        // Check for existing reservations for given timing
        // Check if any of the existing reservations match the table name (if match, means it is taken)
        // check for table Ids
        const takenTableReservation = await Reservation.findOne({
            date,
            tableId,
        });
        console.log("takenTableReservation", takenTableReservation);
        if (takenTableReservation) {
            return res.status(500).json({
                message: "This table is reserved at this slot",
            });
        }
        const newReservation = new Reservation({
            name,
            email,
            noOfPax,
            tableId,
            tableNo,
            date,
        });
        await Reservation.create(newReservation)
            .then(() => {
                // send a confirmation email
                return res.status(200).json({
                    message: "Reservation successfully made!",
                    id: newReservation._id,
                });
            })
            .catch((err) => {
                console.log(err);
                return res.status(500).json({
                    message: "Failed to add reservation(s)",
                });
            });
    } catch (err) {
        return res.status(500).json({
            message: err,
        });
    }
};

// =========================Read=========================
// 1) View all reservartions
const getAllReservations = async (req, res) => {
    try {
        await Reservation.find()
            .then((data) => {
                return res.status(200).json({
                    data,
                });
            })
            .catch((err) => {
                console.log(err);
                return res.status(500).json({
                    message: "Failed to get reservation(s)",
                });
            });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "Failed to get reservation(s)",
        });
    }
};

// 2) Get reservation by ID
// Takes in resrvationId
const getReserationById = async (req, res) => {
    const { reservationId } = req.params;
    try {
        await Reservation.findById(reservationId)
            .then((data) => {
                if (!data) {
                    return res.status(404).json({
                        message: "Reservation is not found",
                    });
                }
                res.status(200).json({
                    data,
                });
            })
            .catch((err) => {
                console.log(err);
                res.send({
                    message: "Failed to get reservation(s)",
                });
            });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Failed to get reservation(s)",
        });
    }
};

// 3) Get reservation by Date Time (Year, Month, Day)
// Takes in DateTime object (Year, Month, Day)
const getReservationsByDateTime = async (req, res) => {
    // const {date} = req.body
    const date = new Date(2023, 0, 15, 11);
    try {
        await Reservation.find({ date })
            .then((data) => {
                return res.status(200).json({
                    data,
                });
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json({
                    message: "Failed to get reservation(s)",
                });
            });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Failed to get reservation(s)",
        });
    }
};

// 4) Get reservation by Table Number
// Takes in tableId (this is handled by frontend options)
const getReservationsByTableId = async (req, res) => {
    const { tableId } = req.params;
    try {
        await Reservation.find({ tableId })
            .then((data) => {
                return res.status(200).json({
                    data,
                });
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json({
                    message: "Failed to get reservation(s)",
                });
            });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Failed to get reservation(s)",
        });
    }
};

// =========================Update=========================
// 1) Update reservation status
// 2) Update reservation details
const updateReservation = async (req, res) => {
    // table object consists of tableId and tableNo
    console.log(req.body);
    const { name, email, noOfPax, table } = req.body;
    const { tableId, tableNo } = table;
    const { reservationId } = req.params;
    try {
        // check if name and email are filled in
        if (!name || !email) {
            return res.status(400).json({
                message: "Name and email cannot be empty!",
            });
        }
        // check if no of pax is empty or 0
        if (!noOfPax || noOfPax == 0) {
            return res.status(400).json({
                message: "No of pax cannot be empty or 0!",
            });
        }
        // check if table is filled in (takes in table object)
        if (!table || !tableId || !tableNo) {
            return res.status(400).json({
                message: "Table cannot be empty",
            });
        }

        // for testing purposes; it takes in date time from frontend in production
        const date = new Date(2023, 0, 15, 11);
        // Check for existing reservations for given timing
        // Check if any of the existing reservations match the table name (if match, means it is taken)
        // check for table Ids
        const takenTableReservation = await Reservation.findOne({
            date,
            tableId,
        });
        console.log("takenTableReservation", takenTableReservation);
        if (
            takenTableReservation &&
            takenTableReservation._id != reservationId
        ) {
            return res.status(500).json({
                message: "This table is reserved at this slot",
            });
        }
        const updatedReservation = {
            name,
            email,
            noOfPax,
            tableId,
            tableNo,
            date,
        };
        await Reservation.updateOne({ _id: reservationId }, updatedReservation)
            .then(() => {
                // send a confirmation email
                return res.status(200).json({
                    message: "Reservation successfully updated",
                });
            })
            .catch((err) => {
                console.log(err);
                return res.status(500).json({
                    message: "Reservation failed to update",
                });
            });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "Reservation failed to update",
        });
    }
};

// =========================Delete=========================
// 1) Delete reservation
const deleteReservation = async (req, res) => {
    const { reservationId } = req.params;
    try {
        await Reservation.findById(reservationId).then((result) => {
            if (!result) {
                return res.status(404).json({
                    message: "Reservation does not exist!",
                });
            } else {
                Reservation.deleteOne(result)
                    .then((deleteResult) => {
                        console.log(deleteResult);
                        return res.status(200).json({
                            message: "Reservation deleted",
                        });
                    })
                    .catch((err) => {
                        console.log(err);
                        res.status(500).json({
                            message: "Failed to delete reservation",
                        });
                    });
            }
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "Failed to delete reservation",
        });
    }
};

module.exports = {
    createReservation,
    getAllReservations,
    getReserationById,
    getReservationsByDateTime,
    getReservationsByTableId,
    updateReservation,
    deleteReservation,
};

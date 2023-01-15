// =========================Import schema=========================
const Table = require("../Models/TableModel");

// =========================Create=========================
// 1) Create table
// Takes in table number label & pax (no of ppl)
const addTable = async (req, res) => {
    const { noOfPax, tableNo } = req.body;
    try {
        // Check if noOfPax is empty or 0
        if (!noOfPax || noOfPax == 0) {
            return res.status(400).json({
                messasge: "Pax for a table cannot be empty or 0",
            });
        }
        // Check if tableNo is empty
        if (!tableNo) {
            return res.status(400).json({
                messasge: "Table number cannot be empty,"
            });
        }

        // Check if tableNo is taken
        const tableNumberExists = await Table.findOne({ tableNo });
        if (tableNumberExists) {
            return res.status(500).json({
                message: "Table number exists",
            });
        }
        const newTable = new Table({
            noOfPax,
            tableNo,
        });
        await Table.create(newTable)
            .then(() => {
                return res.status(200).json({
                    message: "Table created",
                    tableId: newTable._id,
                });
            })
            .catch((err) => {
                console.log(err);
                return res.status(500).json({
                    message: err,
                });
            });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: err,
        });
    }
};

// =========================Read=========================
// 1) Get all tables
const getAllTables = async (req, res) => {
    try {
        await Table.find()
            .then((result) => {
                return res.status(200).json({
                    data: result,
                });
            })
            .catch((err) => {
                console.log(err);
                return res.status(500).json({
                    message: err,
                });
            });
    } catch (err) {
        return res.status(500).json({
            message: err,
        });
    }
};

// =========================Update=========================
// 1) Change table number and/or pax
const updateTable = async (req, res) => {
    const { tableId } = req.params;
    const { noOfPax, tableNo } = req.body;
    try {
        if (!noOfPax || noOfPax == 0) {
            return res.status(400).json({
                messasge: "Pax for a table cannot be empty or 0",
            });
        }
        if (!tableNo) {
            return res.status(400).json({
                messasge: "Pax for a table cannot be empty or 0",
            });
        }
        const tableNumberExists = await Table.findOne({ tableNo });
        console.log("tableNumberExists", tableNumberExists);
        if (tableNumberExists._id != tableId) {
            return res.status(500).json({
                message: "Table number exists",
            });
        }
        const updatedTable = {
            noOfPax,
            tableNo,
        };
        await Table.updateOne({ _id: tableId }, updatedTable)
            .then(() => {
                return res.status(200).json({
                    message: "Table updated",
                });
            })
            .catch((err) => {
                console.log(err);
                return res.status(500).json({
                    message: err,
                });
            });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: err,
        });
    }
};

// =========================Delete=========================
// 1) Delete table
const deleteTable = async (req, res) => {
    const { tableId } = req.params;
    try {
        await Table.findById(tableId).then((result) => {
            if (!result) {
                return res.status(404).json({
                    message: "Table does not exist!",
                });
            } else {
                Table.deleteOne(result)
                    .then((deleteResult) => {
                        console.log(deleteResult);
                        return res.status(200).json({
                            success: true,
                            message: "Table deleted",
                        });
                    })
                    .catch((err) => {
                        console.log(err);
                        res.status(500).json({
                            message: err,
                        });
                    });
            }
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: err,
        });
    }
};

module.exports = {
    addTable,
    getAllTables,
    updateTable,
    deleteTable,
};

// ===========================express and router===========================
const express = require("express");
const router = express.Router();

// ===========================import routes===========================
const {
    addTable,
    getAllTables,
    updateTable,
    deleteTable,
} = require("../Controllers/TableController");
// =========================Create=========================
// 1) Create table
// takes in Table object (refer to Table model) in body 
router.post("/",addTable);

// =========================Read=========================
// 1) Get all tables
router.get("/",getAllTables)

// =========================Update=========================
// 1) Change table number and/or pax
// takes in the tableId as parameter
// takes in Table object (refer to Table model) in body 
router.put("/:tableId",updateTable)

// =========================Delete=========================
// 1) Delete table
// takes in tableId as parameter
router.delete(":tableId",deleteTable)

// ===========================import routes===========================
module.exports = router;

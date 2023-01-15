// =========================Import schema=========================
const Table = require("../Models/TableModel");
const Reservation = require("../Models/ReservationModel");

// =========================Create=========================
// 1) Create reservation
// Check for existing reservations for given timing
// Check if any of the existing reservations match the table name (if match, means it is taken)
const createReservation = async (req, res) => {};

// =========================Read=========================
// 1) View all reservartions
const getAllResrvations = async (req, res) => {};

// 2) Get reservation by ID
// Takes in resrvationId
const getReserationById = async (req, res) => {};

// 3) Get reservation by Date Time (Year, Month, Day)
// Takes in DateTime object (Year, Month, Day)
const getReservationByDate = async (req, res) => {};

// 4) Get reservation by Table Number
// Takes in tableId (this is handled by frontend options)
const getReservationByTableId = async (req, res) => {};

// =========================Update=========================
// 1) Update reservation status
// 2) Update reservation details
const updateReservation = async (req, res) => {};

// =========================Delete=========================
// 1) Delete reservation
const deleteReservation = async (req, res) => {};

module.exports = {
    createReservation,
    getAllResrvations,
    getReserationById,
    getReservationByDate,
    getReservationByTableId,
    updateReservation,
    deleteReservation,
};

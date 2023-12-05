// app/controllers/bookingController.js

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const mysql = require("mysql2");

// Koneksi mysql2
const connection = mysql.createConnection({
  host: "localhost",
  user: "your_username",
  password: "your_password",
  database: "your_database",
});

function fetchBookings(req, res) {
  // Contoh implementasi: Mengambil data pemesanan dari basis data
  const query = "SELECT * FROM bookings";
  connection.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching bookings:", err);
      return res.status(500).json({ message: "Internal server error" });
    }
    return res.status(200).json({ bookings: results });
  });
}

function createBooking(req, res) {
  // Contoh implementasi: Membuat pemesanan baru dalam basis data
  const { userId, flightId, date } = req.body;
  const query =
    "INSERT INTO bookings (userId, flightId, date) VALUES (?, ?, ?)";
  connection.query(query, [userId, flightId, date], (err, results) => {
    if (err) {
      console.error("Error creating booking:", err);
      return res.status(500).json({ message: "Internal server error" });
    }
    return res.status(201).json({ message: "Booking created successfully" });
  });
}

module.exports = {
  fetchBookings,
  createBooking,
};

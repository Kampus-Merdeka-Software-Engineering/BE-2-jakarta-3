// backend/routes/userRoutes.js
const path = require("path");
const express = require("express");
const Paket = require("../models/Paket");
const Tiket = require("../models/Tiket");
const router = express.Router();
require("dotenv").config();

const generateRandomCode = () => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  let code = "";

  for (let i = 0; i < 3; i++) {
    code += letters.charAt(Math.floor(Math.random() * letters.length));
  }

  for (let i = 0; i < 6; i++) {
    code += numbers.charAt(Math.floor(Math.random() * numbers.length));
  }

  return code;
};

router.post("/pesan", async (req, res) => {
  try {
    const { kode_kursi, nama_lengkap, email, PaketId } = req.body;
    const kode_booking = generateRandomCode();
    const tanggal_booking = Date.now();

    // Lakukan pencarian berdasarkan 'tujuan'
    // Pastikan untuk memformat hasil pencarian ke dalam bentuk JSON
    const tiket = await Tiket.create({
      kode_booking,
      kode_kursi,
      tanggal_booking,
      nama_lengkap,
      email,
      PaketId,
    });

    // Kirim data hasil pencarian sebagai JSON untuk redirect ke halaman hasilPencarian
    res
      .status(201)
      .send({ message: "Pesanan berhasil", redirectTo: "data_pesanan.html" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send(error.message);
  }
});

router.get("/booked", async (req, res) => {
  try {
    const tiketData = await Tiket.findAll({
      include: [
        {
          model: Paket, // Sertakan model Paket jika Anda ingin mendapatkan informasi terkait paket tiket
        },
      ],
    });

    // Kirim data tiket dalam bentuk JSON sebagai respons
    res.json(tiketData);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/paketAll", async (req, res) => {
  try {
    const paketData = await Paket.findAll();
    res.json(paketData);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;

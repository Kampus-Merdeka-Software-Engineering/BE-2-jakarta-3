// controllers.js
const { Data } = require('../models/dataModels');

async function getAllData(req, res) {
  try {
    const allData = await Data.findAll();
    res.json(allData);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function createData(req, res) {
  const newData = {
    // firstName: req.body.firstName,
    // lastName: req.body.lastName,
  };

  try {
    const createdData = await Data.create(newData);
    res.json({ message: 'Data berhasil disimpan!', data: createdData });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = {
  getAllData,
  createData,
};

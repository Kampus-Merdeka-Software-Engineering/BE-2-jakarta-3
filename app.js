const path = require("path");
const express = require("express");
const sequelize = require("./config/database");
const userRoutes = require("./routes/userRoutes");
require("dotenv").config();
// const searchResults = require('./routes/searchResults');
const cors = require("cors");

const app = express();
app.use(cors());

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/users", userRoutes);
//static public
app.use(express.static(path.join(__dirname, "../public")));
app.get("/", (req, res) => {
  res.status(200).json({ message: "Connected!" });
});

app.get("/db", async (req, res) => {
  try {
    await sequelize.authenticate();
    res.status(200).json({ message: "Database connected!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
// app.use('/search', searchResults);

// Sync Sequelize models with the database
(async () => {
  try {
    await sequelize.sync();
    console.log("Database and tables synced");
  } catch (error) {
    console.error("Error syncing database:", error);
  }
})();
// app.use(express.logger('dev'))
// Custom error handling middleware
app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message }); // Send error details as JSON response
});

// // Start server
// const PORT = 3000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

const port = process.env.PORT || 3000;



app.listen(port,  () =>
  console.log("Server running on port"+port)
);

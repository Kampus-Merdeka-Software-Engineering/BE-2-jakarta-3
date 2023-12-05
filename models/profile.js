// models/profile.js
const mysql = require("mysql2");
const db = require("../config/db");

const Profile = {
  getUserProfile: (userId) => {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM profiles WHERE userId = ?";
      db.query(query, [userId], (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results[0]);
        }
      });
    });
  },

  updateProfile: (userId, updatedProfileData) => {
    return new Promise((resolve, reject) => {
      const query = "UPDATE profiles SET ? WHERE userId = ?";
      db.query(query, [updatedProfileData, userId], (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  },

  // Add other profile-related database operations
};

module.exports = Profile;

const express = require("express");
const mysql = require("mysql2");
require("dotenv").config();

const app = express();
app.use(express.json());

// DB Connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) {
    console.error("DB connection error:", err);
    return;
  }
  console.log("MySQL Connected");
});

// --------------------
// Distance Function
// --------------------
function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;

  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1 * Math.PI / 180) *
    Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon / 2) ** 2;

  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

// --------------------
// Add School API
// --------------------
app.post("/addSchool", (req, res) => {
  const { name, address, latitude, longitude } = req.body;

  if (!name || !address || isNaN(latitude) || isNaN(longitude)) {
    return res.status(400).json({ message: "Invalid input" });
  }

  const sql =
    "INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)";

  db.query(sql, [name, address, latitude, longitude], (err, result) => {
    if (err) return res.status(500).json(err);

    res.json({ message: "School added successfully" });
  });
});

// --------------------
// List Schools API
// --------------------
app.get("/listSchools", (req, res) => {
  const { lat, lon } = req.query;

  if (isNaN(lat) || isNaN(lon)) {
    return res.status(400).json({ message: "Invalid coordinates" });
  }

  db.query("SELECT * FROM schools", (err, results) => {
    if (err) return res.status(500).json(err);

    const schools = results.map((school) => {
      const distance = calculateDistance(
        parseFloat(lat),
        parseFloat(lon),
        school.latitude,
        school.longitude
      );
      return { ...school, distance };
    });

    schools.sort((a, b) => a.distance - b.distance);

    res.json(schools);
  });
});

// --------------------
// Start Server
// --------------------
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
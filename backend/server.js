const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const appointmentRoutes = require("./routes/appointmentRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", appointmentRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "CareLife backend is running successfully!",
  });
});

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected successfully!");

    app.listen(PORT, () => {
      console.log(`CareLife backend running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection failed:", error.message);
  });
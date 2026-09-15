const express = require("express");

const router = express.Router();

router.post("/appointments", (req, res) => {
  const appointment = req.body;

  console.log("New Appointment:", appointment);

  res.status(201).json({
    success: true,
    message: "Appointment received successfully",
    appointment,
  });
});

module.exports = router;
const express = require("express");
const router = express.Router();

router.post("/add", (req, res) => {
  res.status(200).json({ message: "Add new contact route hit" });
});

module.exports = router;

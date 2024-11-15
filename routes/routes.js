const express = require("express");
const nSideModel = require("../models/model_n");
const oneSideModel = require("../models/model_1");

const router = express.Router();

router.post("/", async (req, res) => {
  const data = new nSideModel({
    name: req.body.name,
    foreignKey: req.body.foreignKey,
  });

  try {
    res.send('POST')
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    res.send('GET all')
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    res.send('GET')
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Update by ID Method
router.patch("/:id", async (req, res) => {
  try {
    res.send('PATCH')
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Delete by ID Method
router.delete("/:id", async (req, res) => {
  res.send('DELETE')
});

module.exports = router;

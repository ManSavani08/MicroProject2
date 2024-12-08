import express from "express";
import Shoe from "../models/Shoe.js";

const router = express.Router();

// CREATE a new shoe
router.post("/", async (req, res) => {
  try {
    const shoe = new Shoe(req.body);
    await shoe.save();
    res.status(201).json({ message: "Shoe created successfully", shoe });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;

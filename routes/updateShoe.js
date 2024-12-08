import express from "express";
import Shoe from "../models/Shoe.js";

const router = express.Router();

// UPDATE a shoe by ID
router.put("/:id", async (req, res) => {
  try {
    const shoe = await Shoe.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!shoe) return res.status(404).json({ message: "Shoe not found" });
    res.status(200).json({ message: "Shoe updated successfully", shoe });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;

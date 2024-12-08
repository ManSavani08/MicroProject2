import express from "express";
import Shoe from "../models/Shoe.js";

const router = express.Router();

// READ all shoes
router.get("/", async (req, res) => {
  try {
    const shoes = await Shoe.find();
    res.status(200).json(shoes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// READ a shoe by ID
router.get("/:id", async (req, res) => {
  try {
    const shoe = await Shoe.findById(req.params.id);
    if (!shoe) return res.status(404).json({ message: "Shoe not found" });
    res.status(200).json(shoe);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;

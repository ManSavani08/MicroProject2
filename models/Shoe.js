import mongoose from "mongoose";

const shoeSchema = new mongoose.Schema({
  brand: { type: String, required: true, minlength: 2 },
  model: { type: String, required: true, minlength: 2 },
  size: { type: Number, required: true, min: 1 },
  price: { type: Number, required: true, min: 0 },
  color: { type: String, required: true },
  isAvailable: { type: Boolean, default: true },
});

const Shoe = mongoose.model("Shoe", shoeSchema, "shoes");

export default Shoe;

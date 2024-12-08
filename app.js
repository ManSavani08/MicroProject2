import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import createShoe from "./routes/createShoe.js";
import readShoe from "./routes/readShoe.js";
import updateShoe from "./routes/updateShoe.js";
import deleteShoe from "./routes/deleteShoe.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Routes
app.use("/api/shoes/create", createShoe);
app.use("/api/shoes/read", readShoe);
app.use("/api/shoes/update", updateShoe);
app.use("/api/shoes/delete", deleteShoe);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

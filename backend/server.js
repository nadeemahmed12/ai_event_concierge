import dotenv from "dotenv";
dotenv.config();
import express from "express";
import connectDB from "./config/db.js";
await connectDB();
import cors from "cors";
import eventRoutes from "./routes/eventRoutes.js"

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/api/events",eventRoutes);

app.listen(PORT, () => {
  console.log(`Server is Running on ${PORT}`);
});
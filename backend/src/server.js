//const express = require('express')
import dns from "dns";
import express from "express";
import dotenv from "dotenv";

import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";

dotenv.config();
dns.setServers(["8.8.8.8", "1.1.1.1"]);

const app = express();
const PORT = process.env.PORT || 5001;
connectDB();

app.use(express.json());

app.use("/api/notes", notesRoutes);

app.listen(PORT, () => {
  console.log(`Server started on PORT: ${PORT}`);
});

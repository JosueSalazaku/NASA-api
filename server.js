import express from "express";
import cors from "cors";
import fetch from "node-fetch";
import config from "./config.js";

const app = express();
const port = 3000;

app.use(cors());

app.get("/api/nasa-data", async (req, res) => {
  try {
    const apiKey = config.apiKey; // Replace with your NASA API key
    const response = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
    );

    const data = await response.json();
    console.log("Data from NASA API:", data);
    res.json(data);
  } catch (error) {
    console.error("Error fetching NASA data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

import "./hamburgerMenu.js";
import config from "./config.js"; // Include the file extension

const apiKey = config.apiKey; // Correctly use apiKey from the config object
const apiURL = "https://api.nasa.gov/planetary/apod";

const serverURL = "http://localhost:3000/api/nasa-data";

const fetchApiData = async () => {
  try {
    const response = await fetch(serverURL);
    console.log("Response Status:", response.status);
    const data = await response.json();
    console.log("Data received from server:", data);
    console.log("Data length:", Object.keys(data).length);
  } catch (error) {
    console.error("Error fetching API data from server:", error);
  }
};

fetchApiData();

import { resolvePath } from 'react-router';
import './style.css'

const displaySection = document.querySelector('.display-section');
const imageDisplay = document.querySelector('.image-display');

const apiKey = import.meta.env.VITE_NASA_API_KEY;


async function fetchImageOfTheDay() {
  try {
    const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`);
    if (!response.ok) {
      throw new Error(`Response statuss: ${response.status}`)
    } 

    const data = await response.json()
    console.log(data);
  } catch (error) {
    console.error(error, 'Data not found');
    
  }
}

fetchImageOfTheDay()
import './style.css'

interface NasaApodData {
  copyright?: string;        
  date: string;             
  explanation: string;      
  hdurl?: string;            
  media_type: string;       
  service_version: string;  
  title: string;             
  url: string;             
}

const displaySection = document.querySelector('#display-section');
const apiKey = import.meta.env.VITE_NASA_API_KEY;
const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`

async function fetchImageOfTheDay() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response statuss: ${response.status}`) 
    } 

    const data = await response.json()
    console.log(data);
    return data
  } catch (error) {
    console.error(error, 'Data not found');
  }
}

async function displayImageOfTheDay(data: NasaApodData) {
  if (!data) {
    console.error('No data to display');
    return;
  }

  const imageOfTheDay = document.createElement("img");
  displaySection?.appendChild(imageOfTheDay) 
  imageOfTheDay.src = data.url
  imageOfTheDay.alt = data.title
  displaySection?.appendChild(imageOfTheDay);

}


async function init() {
  const data = await fetchImageOfTheDay(); 
  if (data) {
    displayImageOfTheDay(data); 
  }
}

init(); 

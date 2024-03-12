// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = "https://api.openweathermap.org/data/2.5/weather?lat=43.81152574039837&lon=-111.77868711708973&appid=a47278e2e9de5255593e29aa1a2c28b7"

async function apiFetch(){
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    displayWeather(data);
}

apiFetch();
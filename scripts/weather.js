const weatherDegrees = document.getElementById('weatherDegrees');
const weatherIcon = document.getElementById('weatherIcon');
const weatherDesc = document.getElementById('weatherDesc');

async function getWeather(){
    const response = await fetch("https://api.openweathermap.org/data/2.5/weather?units=imperial&lat=43.81152574039837&lon=-111.77868711708973&appid=a47278e2e9de5255593e29aa1a2c28b7");
    const data = await response.json();
    console.log(data);
    displayWeather(data);
}

function displayWeather(weatherData) {
    weatherDegrees.textContent = weatherData.main.temp;
    weatherDesc.textContent = weatherData.weather[0].description;
    const iconCode = weatherData.weather[0].icon;
    weatherIcon.setAttribute("src", "https://openweathermap.org/img/wn/"+ iconCode + "@2x.png")
}

getWeather();
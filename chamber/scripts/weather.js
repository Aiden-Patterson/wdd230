const weatherDegrees = document.getElementById('temp');
const weatherDesc = document.getElementById('weatherDesc');
const forecast = document.getElementById('forecast');
async function getWeather(){
    const response = await fetch("https://api.openweathermap.org/data/2.5/weather?units=imperial&lat=36.3723285430077&lon=-94.21022792072695&appid=a47278e2e9de5255593e29aa1a2c28b7");
    const data = await response.json();
    //  console.log(data);
    displayWeather(data);
}

async function getForecast(){
    const response = await fetch("https://api.openweathermap.org/data/2.5/forecast?units=imperial&lat=36.3723285430077&lon=-94.21022792072695&appid=a47278e2e9de5255593e29aa1a2c28b7");
    const data = await response.json();
    // console.log(data);
    displayForecast(data);
}

function displayWeather(weatherData) {
    weatherDegrees.textContent = weatherData.main.temp;
    weatherDesc.textContent = weatherData.weather[0].description;

}

function displayForecast(forecastData) {
    for(var i = 0; i < 3; i++) {
        const weatherCard = document.createElement("div");
        weatherCard.className = "card";
        const date = document.createElement("h3");
        const forecastDate = new Date(forecastData.list[i*8].dt_txt);
        date.textContent = forecastDate.toDateString();
        weatherCard.appendChild(date);

        const forecastWeather = document.createElement("p");
        forecastWeather.textContent = forecastData.list[i*8].main.temp;
        weatherCard.appendChild(forecastWeather);

        const forecastDesc = document.createElement("p");
        forecastDesc.textContent = forecastData.list[i*8].weather[0].description;
        weatherCard.appendChild(forecastDesc);

        forecast.appendChild(weatherCard);
    }
}

getWeather();
getForecast();
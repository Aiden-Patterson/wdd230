const temp = document.getElementById('curTemp');
const icon = document.getElementById('curIcon');
const description = document.getElementById('curDesc');
const humidity = document.getElementById('curHumid');
const weatherCard = document.getElementById('curWeather');
const forecast = document.getElementById('forecast');
async function getWeather(){
    const response = await fetch("https://api.openweathermap.org/data/2.5/weather?units=imperial&lat=33.15800210753131&lon=-117.34960407531311&appid=a47278e2e9de5255593e29aa1a2c28b7");
    const data = await response.json();
    console.log(data);
    displayWeather(data);
}

function displayWeather(weatherData) {
    temp.textContent = weatherData.main.temp + " F";
    description.textContent = weatherData.weather[0].description;
    const iconLink = "https://openweathermap.org/img/wn/" + weatherData.weather[0].icon + "@4x.png";
    weatherCard.style.backgroundImage = "url("+iconLink+")";
    weatherCard.style.backgroundRepeat = "no-repeat";
    weatherCard.style.backgroundPosition = "center";
    weatherCard.style.backgroundSize = "cover";
    humidity.textContent = "Humidity: " + weatherData.main.humidity + "%";
}


async function getForecast(){
    const response = await fetch("https://api.openweathermap.org/data/2.5/forecast?units=imperial&lat=33.15800210753131&lon=-117.34960407531311&appid=a47278e2e9de5255593e29aa1a2c28b7");
    const data = await response.json();
    // console.log(data);
    displayForecast(data);
}

function displayForecast(forecastData) {
    for(var i = 0; i < 3; i++) {
        const forecastCard = document.createElement("div");
        forecastCard.className = "card";
        forecastCard.id = "forecastDate";
        forecastCard.setAttribute("width", "20px");
        forecastCard.setAttribute("border", "1px solid");
        const date = document.createElement("h3");
        const forecastDate = new Date(forecastData.list[i*8].dt_txt);
        date.textContent = forecastDate.toDateString();
        forecastCard.appendChild(date);

        const forecastWeather = document.createElement("p");
        forecastWeather.textContent = forecastData.list[i*8].main.temp;
        forecastCard.appendChild(forecastWeather);

        const forecastDesc = document.createElement("p");
        forecastDesc.textContent = forecastData.list[i*8].weather[0].description;
        forecastCard.appendChild(forecastDesc);

        forecast.appendChild(forecastCard);
    }
}



getWeather();
getForecast();
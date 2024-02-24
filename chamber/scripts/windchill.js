const temp = 32.0;
const windspeed = 10.0;
let windchill = 0.0;
const display = document.getElementById("windchill");
function getWindChill() {
  display.textContent = "Wind Chill: ";
  if (temp <= 50 && windspeed > 3) {
    windchill = 35.74 + 0.6215 * temp - 0.4275 * windspeed;
    display.textContent += windchill;
  } else {
    display.textContent += "N/A";
  }
}

getWindChill();

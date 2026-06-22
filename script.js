// =============================
// WEATHER APP SCRIPT
// DecodeLabs Project 3
// By Iqra Bashir
// =============================


// DOM Elements
const cityInput = document.getElementById("city-input");
const searchBtn = document.getElementById("search-btn");

const temperature = document.getElementById("temperature");
const cityName = document.getElementById("city-name");
const condition = document.getElementById("condition");

const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const feelsLike = document.getElementById("feels-like");

const weatherIcon = document.getElementById("weather-icon");

const themeBtn = document.getElementById("theme-btn");

const dateEl = document.getElementById("date");
const clockEl = document.getElementById("clock");


// =============================
// 1. MOCK WEATHER DATA (No API needed)
// =============================

const weatherData = {
    lahore: {
        temp: 32,
        condition: "Sunny",
        humidity: 45,
        wind: 12,
        feels: 34,
        icon: "01d.png"
    },
    karachi: {
        temp: 30,
        condition: "Cloudy",
        humidity: 70,
        wind: 18,
        feels: 33,
        icon: "02d.png"
    },
    islamabad: {
        temp: 25,
        condition: "Rainy",
        humidity: 80,
        wind: 10,
        feels: 27,
        icon: "09d.png"
    }
};


// =============================
// 2. UPDATE WEATHER FUNCTION
// =============================

function updateWeather(city) {

    const data = weatherData[city.toLowerCase()];

    if (!data) {
        alert("City not found! Please try Lahore, Karachi or Islamabad");
        return;
    }

    temperature.innerText = data.temp + "°C";
    cityName.innerText = city.toUpperCase();
    condition.innerText = data.condition;

    humidity.innerText = data.humidity + "%";
    wind.innerText = data.wind + " km/h";
    feelsLike.innerText = data.feels + "°C";

    weatherIcon.src = `https://openweathermap.org/img/wn/${data.icon}`;
    // BACKGROUND CHANGE ACCORDING TO CITY

const cityLower = city.toLowerCase();

if (cityLower === "lahore") {

    document.body.style.background =
    "linear-gradient(135deg,#00c6ff,#0072ff)";

}

else if (cityLower === "karachi") {

    document.body.style.background =
    "linear-gradient(135deg,#ff4b91,#ff9a9e)";

}

else if (cityLower === "islamabad") {

    document.body.style.background =
    "linear-gradient(135deg,#00b09b,#96c93d)";

}

else {

    document.body.style.background =
    "linear-gradient(135deg,#141e30,#243b55)";

}
}


// =============================
// 3. SEARCH BUTTON EVENT
// =============================

searchBtn.addEventListener("click", () => {

    const city = cityInput.value.trim();

    if (city === "") {
        alert("Please enter a city name!");
        return;
    }

    updateWeather(city);
});


// =============================
// 4. DARK MODE TOGGLE
// =============================

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

});


// =============================
// 5. LIVE CLOCK
// =============================

function updateClock() {

    const now = new Date();

    dateEl.innerText = now.toDateString();

    clockEl.innerText = now.toLocaleTimeString();
}

setInterval(updateClock, 1000);
updateClock();
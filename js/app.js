const API_KEY = '61beeff9583bf5cb51c5b08e85c49138';

// const x = document.getElementById("city");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
    // console.log(navigator.geolocation.getCurrentPosition(showPosition));
  } else { 
    // x.innerHTML = "Geolocation is not supported by this browser.";
  }
}
getLocation();
function showPosition(position) {
    
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    const API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    const data = fetchData(API_URL);
    // console.log(data);
}

const fetchData = url => {
    fetch(url)
        .then(data => data.json())
        .then(json => showTemperature(json))
}

const showTemperature = json => {
    const showCity = document.getElementById('city');
    const showTemp = document.getElementById('temperature');
    const showCondition = document.getElementById('condition');
    const showIcon = document.getElementById('weather-icon');

    const celcius = Math.round(json.main.temp - 273.15);
    // const weather =
    console.log(json.weather[0].icon);
    showCity.innerText = json.name;
    showTemp.innerText = celcius;
    showCondition.innerText = json.weather[0].main;
    showIcon.src = `http://openweathermap.org/img/wn/${json.weather[0].icon}@2x.png`;
}


const getSearchText = () => {
    const inputField = document.getElementById('city-name');
    const city = inputField.value;

    return city;
}

const getTemperature = () => {
    const cityName = getSearchText();
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`;

    fetchData(API_URL);
}


function showTemperature(response) {
  console.log(response);
  let temperature = Math.round(response.data.main.temp);
  let currentCity = response.data.name;
  let cityName = document.querySelector("#current-city");
  cityName.innerHTML = `${currentCity} ${temperature}°`;
}
function showPosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiKey = "462644b919dff4a33e496229f72713d6";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}

navigator.geolocation.getCurrentPosition(showPosition);

let now = new Date();
now.getDay();
let hour = now.getHours();
let minute = now.getMinutes();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thrsday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let current = document.querySelector("#current-time");
current.innerHTML = `${day} ${hour}:${minute}`;

function showUserTemp(response) {
  let temperature = Math.round(response.data.main.temp);

  console.log(temperature);
  let userTemp = document.querySelector("#user-degree");
  userTemp.innerHTML = `${temperature}°`;
}

function search(event) {
  event.preventDefault();
  let cityName = document.querySelector("#input-city");
  let showCityName = document.querySelector("#naghadeh-city");
  showCityName.innerHTML = `${cityName.value}`;
  let apiKey = "462644b919dff4a33e496229f72713d6";
  let cityUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=${apiKey}&units=metric`;
  console.log(cityUrl);
  axios.get(cityUrl).then(showUserTemp);
}
let citySearch = document.querySelector("#search-city");
citySearch.addEventListener("submit", search);

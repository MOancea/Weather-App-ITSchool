const bucharest = document.querySelector(".dropdown-menu .bucharest");
const timisoara = document.querySelector(".dropdown-menu .timisoara");
const oradea = document.querySelector(".dropdown-menu .oradea");

const updateCurrentCity = (city) => {
  const currentCityElement = document.querySelector(".current-city");
  currentCityElement.innerHTML = city;
};

const updateWeather = (city) => {
  updateCurrentCity(city);
  displayCurrentWeather(city);
};

bucharest.addEventListener("click", () => {
  updateWeather("București");
});

timisoara.addEventListener("click", () => {
  updateWeather("Timișoara");
});

oradea.addEventListener("click", () => {
  updateWeather("Oradea");
});

oradea.addEventListener("click", () => {
  updateWeather("Arad");
});

oradea.addEventListener("click", () => {
  updateWeather("Sibiu");
});

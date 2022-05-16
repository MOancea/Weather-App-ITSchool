const apiKey = "c3bf98a399550f454263c563e83155fd";

const getCurrentWeatherEndpoint = (city) => {
  return `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ro&units=metric&appid=${apiKey}`;
};

const getForecastEndpoint = (city) => {
  return `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=ro&units=metric&appid=${apiKey}`;
};

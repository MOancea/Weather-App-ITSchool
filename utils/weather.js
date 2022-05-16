const getWeatherIconUrl = (iconCode) => {
  return `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
};

const windToKmPerHour = (metersPerSecond) => {
  return (metersPerSecond * 3600) / 1000;
};

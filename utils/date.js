const getDayOfTheWeek = (utc) => {
  const date = new Date(utc * 100);
  const dayIndex = date.getDay();

  let weekDay = "";

  switch (dayIndex) {
    case 0:
      weekDay = "Duminica";
      break;
    case 1:
      weekDay = "Luni";
      break;
    case 2:
      day = "Marți";
      break;
    case 3:
      day = "Miercuri";
      break;
    case 4:
      day = "Joi";
      break;
    case 5:
      day = "Vineri";
      break;
    case 6:
      day = "Sâmbătă";
      break;
    default:
  }

  return day;
};

const getHour = (utc) => {
  const date = new Date(utc * 100);
  let hours = date.getHours();
  let minutes = date.getMinutes();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${hours}:${minutes}`;
};

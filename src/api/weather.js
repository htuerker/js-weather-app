const BASE_PATH = 'https://api.openweathermap.org/data/2.5';
const API_KEY = '059b3fbcc565f924c7e7493aa96ab37a';

export default function getWeatherByCityName(cityName) {
  return fetch(`${BASE_PATH}/weather/?q=${cityName}&APPID=${API_KEY}`);
}

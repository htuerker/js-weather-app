import './styles.scss';
import Temperature from '../Temperature';
import TemperatureDetails from '../TemperatureDetails';

export default function WeatherData(data) {
  const wrapper = document.createElement('div');
  const header = document.createElement('div');
  header.className = 'weather-header';
  const body = document.createElement('div');
  body.className = 'weather-body';

  const cityName = data.name;
  header.innerHTML = `${cityName}`;

  const { temp, pressure, humidity, temp_min, temp_max } = data.main;
  const weather = data.weather[0].description;
  const { speed: windSpeed } = data.wind;

  body.appendChild(Temperature(temp, temp_min, temp_max));
  body.className = 'weather-body';

  const details = TemperatureDetails(pressure, humidity, weather, windSpeed);
  details.className = 'weather-details';

  body.appendChild(details);

  wrapper.appendChild(header);
  wrapper.appendChild(body);

  return wrapper;
}

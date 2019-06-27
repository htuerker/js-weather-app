import './styles.scss';
import Card from '../Card';
import getWeatherByCityName from '../../api/weather';
import WeatherData from '../WeatherData';

const defaultCities = ['Istanbul', 'San+Fransisco', 'New+York', 'London', 'Sao+Paulo', 'Los+Angeles'];

export default function () {
  const showcaseDiv = document.createElement('div');
  showcaseDiv.className = 'weather-showcase';
  defaultCities.forEach((city) => {
    getWeatherByCityName(city)
      .then(response => response.json())
      .then(data => showcaseDiv.appendChild(Card(WeatherData(data))));
  });
  return showcaseDiv;
}

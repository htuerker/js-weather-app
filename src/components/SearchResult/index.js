import './styles.scss';
import Card from '../Card';
import WeatherData from '../WeatherData';

export default function (data) {
  const result = document.createElement('div');
  result.className = 'result';
  result.appendChild(Card(WeatherData(data)));
  return result;
}

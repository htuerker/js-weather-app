import './styles.scss';
import SearchForm from './components/SearchForm';
import WeatherShowcase from './components/WeatherShowcase';
import Accordion from './components/Accordion';

((function init() {
  const body = document.getElementsByTagName('body')[0];
  const containerDiv = document.createElement('div');
  containerDiv.className = 'container';
  body.appendChild(containerDiv);
  containerDiv.appendChild(SearchForm());
  const searchResult = Accordion();
  searchResult.setAttribute('id', 'search-result');
  containerDiv.appendChild(searchResult);
  containerDiv.appendChild(WeatherShowcase());
})());

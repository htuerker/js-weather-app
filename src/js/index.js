import './styles/main.scss';
import SearchForm from './components/SearchForm';

((function init() {
  const body = document.getElementsByTagName('body')[0];
  const containerDiv = document.createElement('div');
  containerDiv.className = 'container';
  containerDiv.innerHTML = 'hello, world!';
  body.appendChild(containerDiv);
  containerDiv.appendChild(SearchForm());
})());

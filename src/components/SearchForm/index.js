import './styles.scss';
import getForecastsByCityName from '../../api/weather';
import SearchResult from '../SearchResult';

export default function () {
  const searchForm = document.createElement('form');
  const searchInput = document.createElement('input');
  const inputWrapper = document.createElement('span');
  searchInput.type = 'text';
  searchInput.placeholder = 'Search weather by City';
  inputWrapper.appendChild(searchInput);
  searchForm.appendChild(inputWrapper);
  const submitButton = document.createElement('input');
  submitButton.type = 'button';
  submitButton.value = 'Search';
  searchForm.appendChild(submitButton);

  submitButton.addEventListener('click', () => {
    const cityName = searchInput.value;
    getForecastsByCityName(cityName)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        inputWrapper.classList.add('invalid');
        throw new Error('Not found');
      })
      .then((data) => {
        inputWrapper.classList.remove('invalid');
        const resultDiv = document.getElementById('search-result');
        resultDiv.innerHTML = '';
        resultDiv.appendChild(SearchResult(data));
        resultDiv.classList.add('active');
      });
    searchForm.reset();
  });
  return searchForm;
}

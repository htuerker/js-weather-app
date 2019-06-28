import './styles.scss';
import {
  kelvinToCelcius,
  celciusToFahrenheit,
  fahrenheitToCelcius,
  degreeSpan,
} from '../../util';

function celciusConverter() {
  const span = document.createElement('span');
  span.innerHTML = 'C';
  span.className = 'active';
  return span;
}

function fahrenheitConverter() {
  const span = document.createElement('span');
  span.innerHTML = 'F';
  return span;
}

export default function (temp, min, max) {
  const wrapper = document.createElement('div');
  const tempDiv = document.createElement('div');
  tempDiv.className = 'temp';
  tempDiv.innerHTML = `${kelvinToCelcius(parseInt(temp, 10))}`;
  tempDiv.appendChild(degreeSpan());

  const minMaxDiv = document.createElement('div');
  minMaxDiv.className = 'min-max-temp';
  const minSpan = document.createElement('span');
  minSpan.innerHTML = kelvinToCelcius(parseInt(min, 10));
  minSpan.appendChild(degreeSpan());
  const maxSpan = document.createElement('span');
  maxSpan.innerHTML = kelvinToCelcius(parseInt(max, 10));
  maxSpan.appendChild(degreeSpan());

  minMaxDiv.appendChild(minSpan);
  minMaxDiv.appendChild(maxSpan);

  const converterDiv = document.createElement('div');
  converterDiv.className = 'converter-panel';
  const celciusConverterSpan = celciusConverter();
  const fahrenheitConverterSpan = fahrenheitConverter();

  converterDiv.appendChild(celciusConverterSpan);
  converterDiv.appendChild(fahrenheitConverterSpan);

  celciusConverterSpan.addEventListener('click', () => {
    tempDiv.innerHTML = celciusToFahrenheit(parseInt(tempDiv.innerHTML, 10));
    minSpan.innerHTML = celciusToFahrenheit(parseInt(minSpan.innerHTML, 10));
    maxSpan.innerHTML = celciusToFahrenheit(parseInt(maxSpan.innerHTML, 10));
    celciusConverterSpan.classList.add('active');
    fahrenheitConverterSpan.classList.remove('active');
    tempDiv.appendChild(degreeSpan());
    minSpan.appendChild(degreeSpan());
    maxSpan.appendChild(degreeSpan());
  });

  fahrenheitConverterSpan.addEventListener('click', () => {
    tempDiv.innerHTML = fahrenheitToCelcius(parseInt(tempDiv.innerHTML, 10));
    minSpan.innerHTML = fahrenheitToCelcius(parseInt(minSpan.innerHTML, 10));
    maxSpan.innerHTML = fahrenheitToCelcius(parseInt(maxSpan.innerHTML, 10));
    celciusConverterSpan.classList.remove('active');
    fahrenheitConverterSpan.classList.add('active');
    tempDiv.appendChild(degreeSpan());
    minSpan.appendChild(degreeSpan());
    maxSpan.appendChild(degreeSpan());
  });

  wrapper.appendChild(tempDiv);
  wrapper.appendChild(minMaxDiv);
  wrapper.appendChild(converterDiv);
  return wrapper;
}

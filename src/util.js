// T(°C) = T(K) - 273
function kelvinToCelcius(value) {
  return value - 273;
}

// T(°F) = T(°C) × 9/5 + 32
function celciusToFahrenheit(value) {
  return parseInt(((value - 32) * 5) / 9, 10);
}
// T(°C) = (T(°F) -32) * 5/9
function fahrenheitToCelcius(value) {
  return parseInt((value * 9) / 5 + 32, 10);
}

function degreeSpan() {
  const span = document.createElement('span');
  span.innerHTML = 'º';
  return span;
}

export { kelvinToCelcius, celciusToFahrenheit, fahrenheitToCelcius, degreeSpan }

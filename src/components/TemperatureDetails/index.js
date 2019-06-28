export default function (pressure, humidity, weather, windSpeed) {
  const wrapper = document.createElement('div');
  const pressureSpan = document.createElement('span');
  pressureSpan.innerHTML = `Pressure<br><span>${pressure}hPa</span>`;

  const humiditySpan = document.createElement('span');
  humiditySpan.innerHTML = `Humidity<br> <span>%${humidity}<span>`;

  const windSpeedSpan = document.createElement('span');
  windSpeedSpan.innerHTML = `Wind Speed<br> <span>${windSpeed} km<span>`;

  wrapper.appendChild(pressureSpan);
  wrapper.appendChild(humiditySpan);
  wrapper.appendChild(windSpeedSpan);

  return wrapper;
}

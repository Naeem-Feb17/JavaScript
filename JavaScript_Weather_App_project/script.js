function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  const resultDiv = document.getElementById("weatherResult");

  if (!city) {
    resultDiv.innerHTML = "<p>Please enter a city name.</p>";
    return;
  }

  // Dummy weather data
  const dummyWeather = {
    name: city,
    temp: 26,
    description: "clear sky",
    icon: "01d"
  };

  resultDiv.innerHTML = `
    <h2>${dummyWeather.name}</h2>
    <img src="https://openweathermap.org/img/wn/${dummyWeather.icon}@2x.png" alt="${dummyWeather.description}">
    <p><strong>${dummyWeather.temp}°C</strong></p>
    <p>${dummyWeather.description.charAt(0).toUpperCase() + dummyWeather.description.slice(1)}</p>
  `;
}

const API_KEY = '8d2a110b6ad468ae1a0e459757cf659d';
const API_URL = 'http://api.openweathermap.org/data/2.5/weather';

document.getElementById('weatherForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const cityInput = document.getElementById('location').value;
    if (cityInput) {
        fetch(`${API_URL}?q=${cityInput}&appid=${API_KEY}&units=metric`)
            .then(response => response.json())
            .then(data => {
                displayWeather(data);
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
                displayError();
            });
    }
});

function displayWeather(data) {
    const locationResult = document.getElementById('locationResult');
    const temperatureResult = document.getElementById('temperatureResult');
    const humidityResult = document.getElementById('humidityResult');
    const cloudsResult = document.getElementById('cloudsResult');

    locationResult.textContent = `Location: ${data.name}, ${data.sys.country}`;
    temperatureResult.textContent = `Temperature: ${data.main.temp}°C`;
    humidityResult.textContent = `Humidity: ${data.main.humidity}%`;
    cloudsResult.textContent = `Clouds: ${data.clouds.all}%`;
}

function displayError() {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '<p>Error fetching weather data. Please try again.</p>';
}

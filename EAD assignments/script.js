// @ts-nocheck
let getCityName = document.getElementById('search-box');
const inputField = document.getElementsByClassName('input-field')[0];
const getWeatherButton = document.getElementById('search-btn');

getWeatherButton.addEventListener('click', () => {
    let cityName = getCityName?.value;

    if (cityName === '') {
        alert('Please enter a city name to continue');
        return;
    }

    const apiKey = 'ac9a2c59fc25d8b4ebbdbac85ba29956';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Create a new weatherContainer each time
            let weatherContainer = document.createElement('div');
            weatherContainer.id = 'weatherContainer';
            weatherContainer.innerHTML = `<h2>${data.name}</h2><p>${data.weather[0].description}</p><p>Temperature: ${data.main.temp}°C</p><p>Feels like: ${data.main.feels_like}°C</p><p>Humidity: ${data.main.humidity}%</p>`;

            // Replace existing weatherContainer with the new one
            const existingContainer = document.getElementById('weatherContainer');
            if (existingContainer) {
                existingContainer.replaceWith(weatherContainer);
            } else {
                inputField.nextElementSibling.insertAdjacentElement('afterend', weatherContainer);
            }
        })
        .catch(() => {
            // Create a new weatherContainer for error message
            let weatherContainer = document.createElement('div');
            weatherContainer.id = 'weatherContainer';
            weatherContainer.innerHTML = 'Whoops, something went wrong!';

            // Replace existing weatherContainer with the error message
            const existingContainer = document.getElementById('weatherContainer');
            if (existingContainer) {
                existingContainer.replaceWith(weatherContainer);
            } else {
                inputField.nextElementSibling.insertAdjacentElement('afterend', weatherContainer);
            }
        });
});

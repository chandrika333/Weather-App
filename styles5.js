async function getWeather() {
    const location = document.getElementById('locationInput').value;
    const apiKey = 'YOUR_API_KEY';  // Replace with your weather API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.cod === '404') {
            document.getElementById('weatherInfo').innerHTML = `<p>Location not found. Please try again.</p>`;
            return;
        }

        const weatherInfo = `
            <h2>${data.name}, ${data.sys.country}</h2>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Weather: ${data.weather[0].description}</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Wind Speed: ${data.wind.speed} m/s</p>
        `;

        document.getElementById('weatherInfo').innerHTML = weatherInfo;
    } catch (error) {
        document.getElementById('weatherInfo').innerHTML = `<p>Unable to fetch weather data. Please try again later.</p>`;
    }
}

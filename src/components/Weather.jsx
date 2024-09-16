import React, { useState, useEffect } from 'react';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_KEY = 'YOUR_OPENWEATHERMAP_API_KEY'; // Replace with your API key
  const city = 'Paris'; // Change to any city you'd like
  const units = 'metric'; // Use 'metric' for Celsius or 'imperial' for Fahrenheit

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
         'https://api.openweathermap.org/data/2.5/weather?q=denver&units=metric&appid=4189ea096911c4a9b31cee00715fbf89'
        );
        if (!response.ok) {
          throw new Error('Failed to fetch weather data');
        }
        const data = await response.json();
        setWeatherData(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading) return <div>Loading weather data...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h3 className="text-lg font-semibold">Current Weather in {weatherData.name}</h3>
      <p>Temperature: {weatherData.main.temp}°C</p>
      <p>Weather: {weatherData.weather[0].description}</p>
      <p>Humidity: {weatherData.main.humidity}%</p>
    </div>
  );
};

export default Weather;

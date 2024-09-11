import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch weather data from OpenWeatherMap API
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          'https://api.openweathermap.org/data/2.5/weather?q=denver&units=metric&appid=4189ea096911c4a9b31cee00715fbf89'
        );
        setWeatherData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching weather data:', error);
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading) {
    return <p>Loading weather...</p>;
  }

  if (!weatherData) {
    return <p>Unable to fetch weather data</p>;
  }

  return (
    <div className="col-span-0.3 row-span-0.3 bg-white rounded-lg shadow-lg p-4">
      <h2 className="text-xl font-bold text-red-700">Weather</h2>
      {/* <img src="/src/images/image2.jpg" alt="Weather" className="w-full h-auto rounded-lg mt-4 opacity-40" /> */}
      <div className="weather-info">
        <p>Location: {weatherData.name}</p>
        <p>Temperature: {weatherData.main.temp} °C</p>
        <p>Weather: {weatherData.weather[0].description}</p>
      </div>
    </div>
  );
};

export default Weather;

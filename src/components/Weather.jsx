import React, { useState, useEffect } from 'react';

const Weather = () => {
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_KEY = 'cbb6178fb057f7e9f38af2506435c478'; // Your OpenWeatherMap API key
  const city = 'Denver'; // Change to your preferred city

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`
        );
        const data = await response.json();

        if (data && data.list) {
          // Filter the forecast to get one entry per day (e.g., at noon)
          const dailyForecast = data.list.filter((entry) =>
            entry.dt_txt.includes('12:00:00')
          );

          setForecast(dailyForecast);
        } else {
          setError('No data found for the specified city');
        }

        setLoading(false);
      } catch (error) {
        console.error('Error fetching weather data:', error);
        setError('Could not load weather data');
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city, API_KEY]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="weather-forecast">
      <h3 className="text-xl justify-center font-bold mb-4">5-Day Weather Forecast for {city}</h3>
      <div className="grid grid-cols-5 gap-4">
        {forecast.map((day) => (
          <div key={day.dt} className="weather-day bg-red-600 p-4 rounded-lg">
            <p className="font-bold text-white ">{new Date(day.dt_txt).toLocaleDateString('en-US', { weekday: 'long' })}</p>
            <img
              src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
              alt={day.weather[0].description}
            />
            <p c>{Math.round(day.main.temp)}°C</p>
            <p>{day.weather[0].description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Weather;

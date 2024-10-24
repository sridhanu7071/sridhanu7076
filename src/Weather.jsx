import React, { useState } from 'react';
import axios from 'axios';
import dhanu from'./assets/weather.jpg'
import arvi from './assets/weather2.jpg'
import kir from './assets/weather3.jpg'
import veer from './assets/city.jpg'
import name from './assets/weather4.jpg'
import field from './assets/weather5.jpg'
function Weather() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const API_KEY = '985658d2fe6ea6e71e6c0cf3aae70e2f';
  const fetchWeather = async () => {
    if (!city) return;
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      setWeatherData(response.data);
    } catch (error) {
      console.error("Error fetching the weather data", error);
      setWeatherData(null);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchWeather();
  };

  return (
    <div className="weather-container">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city" />
        <button type="submit">Get Weather</button>
      </form>
      {weatherData && (
        <div className="weather-info">
          <img src={dhanu} alt="" />
          <img src={arvi} alt="" />
          <img src={kir} alt="" />
          
          <h2>CityName: {weatherData.name} 🌆</h2> <img className="full"src={veer} />
          <h2>Weather:{weatherData.main.temp} °c 🌄</h2><img className="full"src={name} />
           <h2>Condition:{weatherData.weather[0].description} 🌦️</h2><img className="full"src={field} />
        </div>
      )}
    </div>
  );
}

export default Weather;
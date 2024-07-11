import React from 'react';
import Tile from './Tile';
import { getHumidityValue, getWindDirection, getVisibilityValue, getSunTime, getPop } from './info';

const WeatherLeftSection = ({ data }) => {
  const today = data.list[0];
  return (
    <div className="w-full md:w-1/3 px-4 py-6 bg-white bg-opacity-20 backdrop-blur-lg rounded-lg shadow-lg mb-4 md:mb-0">
      <div>
        <h2 className="text-3xl font-bold mb-2 text-center text-white">
          {data.name}, {data.country}
        </h2>
        <h1 className="text-6xl font-extrabold mb-2 text-center text-white">
          {Math.round(today.main.temp)}<sup>o</sup>
        </h1>
        <p className="text-lg mb-4 text-center text-white">
          {today.weather[0].main} ({today.weather[0].description})
        </p>
        <img
          alt={`weather-icon-${today.weather[0].description}`}
          src={`http://openweathermap.org/img/wn/${today.weather[0].icon}.png`}
          className="h-24 w-24 mx-auto"
        />
      </div>
    </div>
  );
};

const WeatherTopRightSection = ({ data }) => (
  <div className="w-full md:w-2/3 px-4 py-12 bg-white bg-opacity-20 backdrop-blur-lg rounded-lg shadow-lg mb-4 md:mb-0">
    <div className="overflow-x-auto">
      <div className="flex space-x-4 justify-center">
        {data.list.map((item, i) => (
          <div key={i} className="flex flex-col items-center">
            <p className="text-sm text-white">
              {i === 0 ? 'Now' : new Date(item.dt * 1000).getHours()}
            </p>
            <img
              alt={`weather-icon-${item.weather[0].description}`}
              src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
              className="h-10 w-10"
            />
            <p className="text-sm font-bold text-white">
              {Math.round(item.main.temp)}<sup>o</sup>
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const WeatherBottomRightSection = ({ data }) => (
  <div className="w-full px-12 py-9 bg-white bg-opacity-20 backdrop-blur-lg rounded-lg shadow-lg">
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
      <Tile
        icon='sunrise'
        title="Sunrise"
        info={getSunTime(data.sunrise)}
      />
      <Tile
        icon='sunset'
        title="Sunset"
        info={getSunTime(data.sunset)}
      />
      <Tile
        icon="wind"
        title="Wind"
        info={`${Math.round(data.list[0].wind.speed)} km/h`}
        description={`${getWindDirection(Math.round(data.list[0].wind.deg))}, gusts ${data.list[0].wind.gust.toFixed(1)} km/h`}
      />
      <Tile
        icon="feels"
        title="Feels like"
        info={`${Math.round(data.list[0].main.feels_like)}\u00B0`}
        description={`Feels ${Math.round(data.list[0].main.feels_like) < Math.round(data.list[0].main.temp) ? 'colder' : 'warmer'}`}
      />
      <Tile
        icon="humidity"
        title="Humidity"
        info={`${data.list[0].main.humidity} %`}
        description={getHumidityValue(data.list[0].main.humidity)}
      />
      <Tile
        icon="pop"
        title="Precipitation"
        info={`${Math.round(data.list[0].pop * 100)}%`}
        description={`${getPop(data.list[0].pop)}, clouds at ${data.list[0].clouds.all}%`}
      />
      <Tile
        icon="pressure"
        title="Pressure"
        info={`${data.list[0].main.pressure} hPa`}
        description={`${Math.round(data.list[0].main.pressure) < 1013 ? 'Lower' : 'Higher'} than standard`}
      />
      <Tile
        icon="visibility"
        title="Visibility"
        info={`${(data.list[0].visibility / 1000).toFixed()} km`}
        description={getVisibilityValue(data.list[0].visibility)}
      />
    </div>
  </div>
);

const Weather = ({ data }) => (
  <div className="container mx-auto flex flex-wrap justify-center">
    <WeatherLeftSection data={data} />
    <WeatherTopRightSection data={data} />
    <WeatherBottomRightSection data={data} />
    <button
      className="text-center px-3 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 focus:outline-none mt-4 bg-opacity-20 hover:bg-opacity-30"
      onClick={() => window.location.reload()}
    >
      Search again
    </button>
  </div>
);

export default Weather;

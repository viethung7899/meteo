import axios from "axios";
import type { City } from "./city";

export type Weather = {
  id: number;
  main: string;
  description: string;
  icon: string;

}

export type WeatherReport = {
  weather: Weather[];
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    humidity: number;
  },
  wind: {
    speed: number;
    deg: number;
  },
  visibility: number;
}

export const getCurrentWeather = async (latitude: number, longitude: number) => {
  return axios.get<WeatherReport>('https://api.openweathermap.org/data/2.5/weather', {
    params: {
      lat: latitude,
      lon: longitude,
      units: 'metric',
      appid: import.meta.env.VITE_WEATHER_API_KEY
    }
  }).then(response => response.data);
}

type TimeWeatherReport = WeatherReport & { dt: number };

export type WeatherForecast = {
  list: TimeWeatherReport[];
  city: {
    timezone: number;
    sunrise: number;
    sunset: number;
  }
}

export const getHourForecast = (forecast: WeatherForecast) => {
  console.log(forecast)
  return forecast.list.slice(0, 8).map(({dt, main, weather}) => {
    return {
      dt,
      temp: main.temp,
      weather
    }
  });
};

const getDailyForcast = (forecast: WeatherForecast) => {

};

export const getWeatherForecast = async (city: City) => {
  return axios.get<WeatherForecast>('https://api.openweathermap.org/data/2.5/forecast', {
    params: {
      lat: city.latitude,
      lon: city.longitude,
      units: 'metric',
      appid: import.meta.env.VITE_WEATHER_API_KEY
    }
  }).then(response => response.data);
}
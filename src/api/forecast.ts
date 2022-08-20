import axios from "axios";
import type { Weather } from "./weather";

export type HourlyWeather = {
  dt: number,
  temp: number,
  weather: Weather[]
}

export type DailyWeather = {
  dt: number;
  weather: Weather[],
  temp: {
    min: number;
    max: number;
  }
}

type Forecast = {
  timezone_offset: number;
  hourly: HourlyWeather[];
  daily: DailyWeather[];
}

export const fetchForecast = (latitude: number, longitude: number) => {
  return axios.get<Forecast>('https://api.openweathermap.org/data/3.0/onecall', {
    params: {
      lat: latitude,
      lon: longitude,
      units: 'metric',
      exclude: 'current,minutely,alerts',
      appid: import.meta.env.VITE_WEATHER_API_KEY
    }
  }).then(reponse => reponse.data)
};
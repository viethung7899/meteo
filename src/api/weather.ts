import axios from "axios";
import type { City } from "./city";

type Weather = {
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

export const sampleReport: WeatherReport = {
  weather: [
    {
      id: 804,
      main: "Clouds",
      description: "overcast clouds",
      icon: "04n"
    }
  ],
  main: {
    temp: 290.82,
    feels_like: 290.84,
    temp_min: 290.82,
    temp_max: 290.82,
    humidity: 84,
  },
  wind: {
    speed: 7.22,
    deg: 318
  },
  visibility: 10000,
}

export const getCurrentWeather = async (city: City) => {
  return axios.get<WeatherReport>('https://api.openweathermap.org/data/2.5/weather', {
    params: {
      lat: city.latitude,
      lon: city.longitude,
      units: 'metric',
      appid: import.meta.env.VITE_WEATHER_API_KEY
    }
  }).then(response => response.data);
}
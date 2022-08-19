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
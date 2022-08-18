import axios from "axios";

const RAPID_API_KEY = import.meta.env.VITE_RAPID_API_KEY;

export type City = {
  latitude: number;
  longitude: number;
  city: string;
  region: string;
  regionCode: string;
  country: string;
  countryCode: string;
}

export const findCities = (query: string, limit = 5) => {
  return axios.get<{ data: City[] }>('https://wft-geo-db.p.rapidapi.com/v1/geo/cities', {
    headers: {
      'X-RapidAPI-Key': RAPID_API_KEY,
      'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
    },
    params: {
      limit,
      namePrefix: query,
      sort: '-population',
      types: 'CITY'
    }
  }).then(response => response.data.data);
};
import axios from "axios";

const RAPID_API_KEY = import.meta.env.VITE_RAPID_API_KEY;

export type City = {
  latitude: number;
  longitude: number;
  city: string;
  region: string;
  country: string;
}

const fakeCities: City[] = [
  {
    latitude: 0,
    longitude: 0,
    city: "A",
    region: "A",
    country: "A"
  },
  {
    latitude: 0,
    longitude: 0,
    city: "B",
    region: "B",
    country: "B"
  },
  {
    latitude: 0,
    longitude: 0,
    city: "C",
    region: "C",
    country: "C"
  }
]

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

export const getFakeCities = async (query: string, limit = 5) => {
  if (query.trim().length === 0) return undefined;
  await new Promise(r => setTimeout(r, 500));
  return fakeCities;
}
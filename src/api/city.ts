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
    latitude: 49.2494,
    longitude: -122.98,
    city: "Metro Vancouver",
    region: "BC",
    country: "Canada"
  },
  {
    latitude: 45.631111111,
    longitude: -122.671666666,
    city: "Vancouver",
    region: "WA",
    country: "USA"
  }
]

export const findCities = async (query: string, limit = 5) => {
  const trim = query.trim();
  if (trim.length <= 0) return null;
  return await axios.get<{ data: City[] }>('https://wft-geo-db.p.rapidapi.com/v1/geo/cities', {
    headers: {
      'X-RapidAPI-Key': RAPID_API_KEY,
      'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
    },
    params: {
      limit,
      namePrefix: trim,
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
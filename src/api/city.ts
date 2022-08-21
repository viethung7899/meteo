import axios from "axios";

const geoApi = axios.create({
  baseURL: 'https://wft-geo-db.p.rapidapi.com/v1/geo/',
  headers: {
    'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
    'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY
  }
})

export type City = {
  latitude: number;
  longitude: number;
  city: string;
  region: string;
  country: string;
}

export const findCities = (query: string, limit = 5) => {
  const trim = query.trim();
  if (trim.length <= 0) return null;
  return geoApi.get<{ data: City[] }>('cities', {
    params: {
      limit,
      namePrefix: trim,
      sort: '-population',
      types: 'CITY'
    }
  }).then(response => response.data.data);
};

export const getNearestCityByGeoLocation = (latitude: number, longitude: number) => {
  const slug = `${latitude.toFixed(4)}${longitude >= 0 ? "+" : ""}${longitude.toFixed(4)}`;
  return geoApi.get<{data: City[]}>(`locations/${slug}/nearbyCities`, {
    params: {
      limit: 1,
      radius: 100
    }
  }).then(response => response.data.data[0]);
}
import { writable } from "svelte/store";
import type { City } from "../api/city";

export const city = writable<City | undefined>(undefined);
export const getFullName = (city: City) => {
  return [city.city, city.region, city.country].join(', ');
}
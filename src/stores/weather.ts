import { sampleReport } from "../api/weather";
import { readable, writable } from "svelte/store";
import type { Unit } from "src/util/temp";

export const currentWeather = readable(sampleReport);
export const weather = writable(30);
export const unit = writable<Unit>("metric");
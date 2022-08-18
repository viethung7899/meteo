import { writable } from "svelte/store";

const createWeather = () => {
	const { subscribe, update } = writable(30);

	return {
		subscribe,
		increment: () => update(n => n + 5),
		decrement: () => update(n => n - 5)
	};
}

export const weather = createWeather();

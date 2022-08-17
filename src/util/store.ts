import { derived, writable } from "svelte/store";
import tinycolor from "tinycolor2";
import { getTempColor } from "./colorTemp";

const createWeather = () => {
	const { subscribe, update } = writable(30);

	return {
		subscribe,
		increment: () => update(n => n + 5),
		decrement: () => update(n => n - 5)
	};
}

export const weather = createWeather();
const rgb = derived(weather, $weather => getTempColor($weather));
export const backgroundColor = derived(
	rgb, ([red, green, blue]) => {
		return `rgb(${red}, ${green}, ${blue})`;
	});
export const isDark = derived(backgroundColor, $bg => tinycolor($bg).isDark());

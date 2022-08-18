import { writable } from "svelte/store";

type Location = {
	name: string,
	longitude: number,
	latitude: number
}

export const location = writable<Location>({
	name: "",
	longitude: 0,
	latitude: 0
});
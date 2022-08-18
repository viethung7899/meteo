import { writable } from "svelte/store";

type Location = {
	name: string,
	longitude: number,
	latitude: number
}

export const location = writable<Location>();
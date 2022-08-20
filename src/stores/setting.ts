import type { Unit } from "src/util/weather";
import { derived, writable } from "svelte/store";
import tinycolor from "tinycolor2";
import { getTempColor } from "../util/color";

export const unit = writable<Unit>("metric");
export const temperature = writable(32);
const rgb = derived(temperature, $temperature => getTempColor($temperature));
export const backgroundColor = derived(
  rgb, ([red, green, blue]) => {
    return `rgb(${red}, ${green}, ${blue})`;
  });
export const isDark = derived(backgroundColor, $bg => tinycolor($bg).isDark());
export const region = derived(isDark, $isDark => $isDark ? 'bg-white' : 'bg-black');

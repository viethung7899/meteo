import { derived } from "svelte/store";
import tinycolor from "tinycolor2";
import { getTempColor } from "../util/color";
import { weather } from "./weather";

const rgb = derived(weather, $weather => getTempColor($weather));
export const backgroundColor = derived(
  rgb, ([red, green, blue]) => {
    return `rgb(${red}, ${green}, ${blue})`;
  });
export const isDark = derived(backgroundColor, $bg => tinycolor($bg).isDark());
export const region = derived(isDark, $isDark => $isDark ? 'bg-white' : 'bg-black');

<script lang="ts">
  import type { WeatherReport } from '@api/weather';
  import { isDark, region, unit } from '@stores/setting';
  import { getIcon } from '@utils/lookup';
  import { convertTemperature } from '@utils/weather';
  export let report: WeatherReport;
  $: condition = report.weather[0];
  $: imageName = getIcon(condition.id, condition.icon);
</script>

<div
  class="{$region} bg-opacity-10 p-4 rounded-md lg:flex-1 flex flex-col items-center justify-center"
>
  <div class="flex flex-row items-center">
    <img
      class="w-[7.5rem] sm:w-40"
      src="assets/{imageName}.svg"
      alt={condition.description}
      style:filter="invert({$isDark ? 1 : 0})"
    />
    <div>
      <div class="text-6xl sm:text-8xl">
        {convertTemperature(report.main.temp, $unit)}&deg;
      </div>
      <div class="text-2xl font-medium">{condition.main}</div>
    </div>
  </div>

  <div class="flex flex-row space-x-5 mt-3">
    <div class="text-xl">
      <i class="fa-solid fa-temperature-quarter mr-2" />L {convertTemperature(
        report.main.temp_min,
        $unit,
      )}&deg;
    </div>
    <div class="text-xl">
      <i class="fa-solid fa-temperature-full mr-2" />H {convertTemperature(
        report.main.temp_max,
        $unit,
      )}&deg;
    </div>
  </div>
</div>

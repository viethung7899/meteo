<script lang="ts">
  import type { DailyWeather } from '@api/forecast';
  import { isDark, region, unit } from '@stores/setting';
  import { getIcon } from '@utils/lookup';
  import { convertTemperature } from '@utils/weather';
  import TemperatureBar from './TemperatureBar.svelte';

  export let timezoneOffset = -25200;
  export let forecast: DailyWeather[];

  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thurday',
    'Friday',
    'Saturday',
  ];

  const getDay = (dt: number) => {
    const date = new Date((dt + timezoneOffset) * 1000);
    return days[date.getUTCDay()];
  };

  $: globalMin = Math.min(
    ...forecast.map((day) => convertTemperature(day.temp.min, $unit)),
  );
  $: globalMax = Math.max(
    ...forecast.map((day) => convertTemperature(day.temp.max, $unit)),
  );
</script>

<div class="{$region} bg-opacity-10 p-4 w-full rounded-md space-y-4">
  {#each forecast as day, index}
    {@const weather = day.weather[0]}
    {@const min = convertTemperature(day.temp.min, $unit)}
    {@const max = convertTemperature(day.temp.max, $unit)}
    <div class="flex items-center">
      <div class="w-[100px]">
        {index == 0 ? 'Today' : index == 1 ? 'Tomorrow' : getDay(day.dt)}
      </div>
      <img
        alt={weather.description}
        src="assets/{getIcon(weather.id, weather.icon)}.svg"
        class="w-[40px]"
        style:filter="invert({$isDark ? 1 : 0})"
      />
      <div
        class="flex-1 xs:ml-4 flex space-x-2 justify-end items-end xs:items-center"
      >
        <div
          class="w-[40px] min-w-[40px] text-xl opacity-50 xs:opacity-100 xs:text-2xl"
        >
          {min}&deg;
        </div>
        <TemperatureBar {min} {max} {globalMin} {globalMax} />
        <div class="w-[40px] min-w-[40px] text-2xl text-end">
          {max}&deg;
        </div>
      </div>
    </div>
  {/each}
</div>

<style>
</style>

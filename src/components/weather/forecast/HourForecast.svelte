<script lang="ts">
  import { getHourForecast, type WeatherForecast } from '@api/weather';

  import { region, unit, isDark } from '@stores/setting';
import { getIcon } from '@utils/lookup';
import { convertTemperature } from '@utils/weather';
  export let forecast: WeatherForecast;

  $: hourForecast = getHourForecast(forecast);
  $: getTime = (dt: number) => {
    const date = new Date((dt + forecast.city.timezone) * 1000);
    const hour = date.getUTCHours();
    if (hour == 0) return "12AM";
    if (hour < 12) return hour + "AM";
    if (hour == 12) return "12PM";
    else return (hour % 12) + "PM";
  }
</script>

<div class="{$region} bg-opacity-10 w-full rounded-md overflow-x-auto px-4">
  <div class="flex flex-row justify-between min-w-full space-x-4">
    {#each hourForecast as hour}
    {@const weather = hour.weather[0]}
    <div class="flex flex-col py-4 items-center w-[60px] min-w-[60px]">
      <div>{getTime(hour.dt)}</div>
      <img class="w-full" alt={weather.description} src="/assets/{getIcon(weather.id, weather.icon)}.svg" style:filter="invert({$isDark ? 1 : 0})" />
      <div>{convertTemperature(hour.temp, $unit)}&deg;</div>
    </div>
    {/each}
  </div>
</div>
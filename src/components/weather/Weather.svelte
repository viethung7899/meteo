<script lang="ts">
  import { convertTemperature } from '../../util/weather';

  import { getCurrentWeather } from '../../api/weather';
  import { city, getFullName } from '../../stores/city';
  import { region, temperature } from '../../stores/setting';
  import CurrentWeather from './CurrentWeather.svelte';

  $: currentWeather = async () => {
    if ($city) {
      const data = await getCurrentWeather($city);
      temperature.set(convertTemperature(data.main.temp, 'imperial'));
      return data;
    } else return null;
  };
</script>

<div class="mt-5">
  {#if $city}
    <div class="text-3xl lg:text-4xl font-bold">{getFullName($city)}</div>
  {/if}
  <!-- Current weather -->
  {#await currentWeather()}
    <div class="text-xl w-full text-center py-4 fa-fade">Loading...</div>
  {:then report}
    {#if report}
      <CurrentWeather {report} />
    {/if}
  {:catch}
    <div class="{$region} bg-opacity-20 w-full p-4 text-xl">
      <i class="fa-solid fa-triangle-exclamation mr-2" />
      Cannot fetch weather data
    </div>
  {/await}
</div>

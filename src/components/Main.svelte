<script>
  import { city, getFullName } from '@stores/city';
  import Search from './search/Search.svelte';
  import CurrentWeather from './weather/current/CurrentWeather.svelte';
import Forecast from './weather/forecast/Forecast.svelte';
</script>

<main class="flex flex-col items-strech max-w-4xl flex-grow w-full p-5">
  <Search />
  {#if $city}
    <div class="text-3xl lg:text-4xl font-bold mt-5">{getFullName($city)}</div>
    <CurrentWeather latitude={$city.latitude} longitude={$city.longitude} />
    <Forecast latitude={$city.latitude} longitude={$city.longitude} />
  {/if}
</main>

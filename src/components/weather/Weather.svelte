<script lang="ts">
  import { city, getFullName } from '@stores/city';
  import CurrentWeather from './current/CurrentWeather.svelte';
  import Forecast from './forecast/Forecast.svelte';
</script>

<div class="mt-5">
  {#if $city}
    <div class="text-3xl lg:text-4xl font-bold">{getFullName($city)}</div>
  {/if}
  <CurrentWeather />
  <Forecast />
</div>

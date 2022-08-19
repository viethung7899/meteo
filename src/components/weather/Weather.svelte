<script lang="ts">
  import { getCurrentWeather } from '../../api/weather';
  import { city, getFullName } from '../../stores/city';
  import CurrentWeather from './CurrentWeather.svelte';

  $: currentWeather = async () => {
    if ($city) return getCurrentWeather($city);
    else return null;
  };
</script>

<div class="mt-5">
  {#if $city}
    <div class="text-3xl lg:text-4xl font-bold">{getFullName($city)}</div>
  {/if}
  <!-- Current weather -->
  {#await currentWeather()}
    <div>Loading...</div>
  {:then report}
    {#if report}
      <CurrentWeather {report} />
    {/if}
  {:catch}
    <div>Error</div>
  {/await}
</div>

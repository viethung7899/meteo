<script lang="ts">
  import { getWeatherForecast } from '@api/weather';
  import Error from '@components/shared/Error.svelte';
  import Loading from '@components/shared/Loading.svelte';
  import { city } from '@stores/city';
  import { region } from '@stores/setting';
  import HourForecast from './HourForecast.svelte';
  $: promise = $city ? getWeatherForecast($city) : null;
</script>

{#if promise}
  {#await promise}
    <Loading />
  {:then forecast}
    <div class="flex flex-col space-y-4 mt-4">
      <HourForecast {forecast} />
      <div class="{$region} bg-opacity-10 p-4 w-full rounded-md" />
    </div>
  {:catch}
    <Error message="Cannot fetch weather forecast data" />
  {/await}
{/if}

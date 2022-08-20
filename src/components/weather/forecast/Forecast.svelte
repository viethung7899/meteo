<script lang="ts">
  import { fetchForecast } from '@api/forecast';

  import Error from '@components/shared/Error.svelte';
  import Loading from '@components/shared/Loading.svelte';
  import { region } from '@stores/setting';
  import DailyForcast from './DailyForcast.svelte';
  import HourForecast from './HourlyForecast.svelte';

  export let latitude: number;
  export let longitude: number;

  $: promise = fetchForecast(latitude, longitude);
</script>

{#await promise}
  <Loading />
{:then forecast}
  <div class="flex flex-col space-y-4 mt-4">
    <HourForecast
      timezoneOffset={forecast.timezone_offset}
      forecast={forecast.hourly}
    />
    <DailyForcast forecast={forecast.daily} timezoneOffset={forecast.timezone_offset} />
  </div>
{:catch}
<Error message="Cannot fetch the forecast" />
{/await}


<script lang="ts">
  import { getCurrentWeather } from '@api/weather';
  import Error from '@components/shared/Error.svelte';
  import Loading from '@components/shared/Loading.svelte';
  import { temperature } from '@stores/setting';
  import { convertTemperature } from '@utils/weather';
  import Condition from './Condition.svelte';
  import Details from './Details.svelte';

  export let latitude: number;
  export let longitude: number;

  $: promise = getCurrentWeather(latitude, longitude).then((data) => {
    temperature.set(convertTemperature(data.main.temp, 'imperial'));
    return data;
  });
</script>

{#await promise}
  <Loading />
{:then report}
  <div
    class="mt-5 flex flex-col lg:flex-row space-y-5 lg:space-x-2 lg:space-y-0 items-stretch"
  >
    <Condition {report} />
    <Details {report} />
  </div>
{:catch}
  <Error message="Cannot fetch current weather data" />
{/await}

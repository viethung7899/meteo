<script lang="ts">
  import { location } from '../../stores/location';
  import CurrentWeather from './CurrentWeather.svelte';
</script>

<div class="mt-5">
  <div class="text-3xl lg:text-4xl font-bold">{$location.name}</div>
  <CurrentWeather />
</div>

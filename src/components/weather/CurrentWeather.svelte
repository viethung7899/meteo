<script>
  import { region } from '../../stores/ui';
  import {currentWeather, unit} from '../../stores/weather';
  import {convertFromKelvin} from '../../util/temp';
  import Temperature from './Temperature.svelte';
</script>

<div
  class="mt-5 flex flex-col lg:flex-row space-y-5 lg:space-x-2 lg:space-y-0 items-stretch"
>
  <div class="{$region} bg-opacity-10 p-5 rounded-md lg:flex-1 flex flex-col items-center">
    <!-- Temperature -->
    <Temperature />

    <!-- High and low -->
    <div class="flex flex-row space-x-5 mt-3">
      <div class="text-2xl"><i class="fa-solid fa-temperature-quarter mr-2"></i>{convertFromKelvin($currentWeather.main.temp_min, $unit)}&deg;</div>
      <div class="text-2xl"><i class="fa-solid fa-temperature-full mr-2"></i>{convertFromKelvin($currentWeather.main.temp_max, $unit)}&deg;</div>
    </div>
  </div>

  <div class="{$region} bg-opacity-10 p-5 rounded-md lg:flex-1" />
</div>

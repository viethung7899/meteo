<script>
  import { convertFromKelvin } from '../../util/temp';
  import { region } from '../../stores/ui';
  import { currentWeather as now, unit } from '../../stores/weather';

  $: wind =
    $unit === 'metric'
      ? `${Math.round($now.wind.speed * 3.6)} km/h`
      : `${Math.round($now.wind.speed * 2.237)} mph`;

  $: feelsLike = Math.round(convertFromKelvin($now.main.feels_like, $unit));
  $: visibility = $unit === "metric" ? `${Math.round($now.visibility / 1000)} km` : `${Math.round($now.visibility / 1600)} miles`
</script>

<div
  class="{$region} bg-opacity-10 rounded-md lg:flex-1 grid grid-cols-1 sm:grid-cols-2 gap-1"
>
  <div class="detail">
    <div class="title"><i class="fa-solid fa-wind mr-2" />Wind</div>
    <div class="value">
      {wind}
      <span
        class="aspect-square fa-solid fa-long-arrow-up"
        style="transform: rotate({$now.wind.deg}deg)"
      />
    </div>
  </div>
  <div class="detail">
    <div class="title"><i class="fa-solid fa-droplet mr-2" />Humidity</div>
    <div class="value">{$now.main.humidity} &#37;</div>
  </div>
  <div class="detail">
    <div class="title">
      <i class="fa-solid fa-temperature-high mr-2" />Feels Like
    </div>
    <div class="value">{feelsLike}&deg;</div>
  </div>
  <div class="detail">
    <div class="title"><i class="fa-solid fa-eye mr-2" />Visibility</div>
    <div class="value">{visibility}</div>
  </div>
</div>

<style>
  .detail {
    @apply flex flex-row sm:flex-col items-center justify-between sm:justify-center space-x-2 p-4;
  }

  .title {
    @apply font-bold;
  }

  .value {
    @apply text-2xl;
  }

  .wind-direction {
    transform: rotate(90deg);
  }
</style>

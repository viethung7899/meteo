<script lang="ts">
  import type { WeatherReport } from '../../api/weather';
  import { isDark } from '../../stores/ui';
  import { unit } from '../../stores/weather';
  import { getIcon } from '../../util/lookup';
  import { convertTemperature } from '../../util/temp';
  export let report: WeatherReport;
  $: condition = report.weather[0];
  $: imageName = getIcon(condition.id, condition.icon);
</script>

<div class="flex flex-row items-center">
  <img
    class="w-40 h-40"
    src="assets/{imageName}.svg"
    alt={condition.description}
    style:filter="invert({$isDark ? 1 : 0})"
  />
  <div>
    <div class="text-8xl">
      {convertTemperature(report.main.temp, $unit)}&deg;
    </div>
    <div class="text-2xl font-medium">{condition.main}</div>
  </div>
</div>

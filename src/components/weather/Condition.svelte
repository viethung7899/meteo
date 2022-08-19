<script>
import { convertFromKelvin } from '../../util/temp';

  import { isDark } from '../../stores/ui';
  import { currentWeather as now, unit } from '../../stores/weather';
  import { getIcon } from '../../util/lookup';

  $: condition = $now.weather[0];
  $: imageName = getIcon(condition.id, condition.icon.slice(-1) === 'd');
</script>

<div class="flex flex-row items-center">
  <img
    class="w-40 h-40"
    src="assets/{imageName}.svg"
    alt={condition.description}
    style:filter="invert({$isDark ? 1 : 0})"
  />
  <div>
    <div class="text-8xl">{convertFromKelvin($now.main.temp, $unit)}&deg;</div>
    <div class="text-2xl font-medium">{condition.main}</div>
  </div>
</div>

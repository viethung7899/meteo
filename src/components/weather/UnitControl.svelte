<script>
  import { isDark } from '../../stores/ui';
  import { unit } from '../../stores/weather';

  $: chosen = $isDark ? 'chosen-dark' : 'chosen-light';
  $: toggle = () =>
    unit.update(($unit) => ($unit === 'metric' ? 'imperial' : 'metric'));
</script>

<div
  class="flex flex-row border-2 {$isDark
    ? 'border-white'
    : 'border-black'} rounded-full cursor-pointer"
  on:click={toggle}
>
  <div class={`unit ${$unit === 'metric' && chosen}`}>&deg;C</div>
  <div class={`unit ${$unit !== 'metric' && chosen}`}>&deg;F</div>
</div>

<style>
  .unit {
    @apply w-10 text-center text-lg font-bold rounded-full;
  }

  .chosen-dark {
    @apply bg-white text-black;
    mix-blend-mode: screen;
  }

  .chosen-light {
    @apply bg-black text-white;
    mix-blend-mode: multiply;
  }
</style>

<script>
  import { unit } from '../../stores/weather';
  import {isDark} from '../../stores/ui';

  $: chosen = $isDark ? 'chosen-dark' : 'chosen-light';
</script>

<div class="flex flex-row border-2 {$isDark ? 'border-white' : 'border-black'} rounded-full bg-clip-content">
  <div
    class={`unit ${$unit === 'metric' && chosen}`}
    on:click={() => unit.set('metric')}
  >
    &deg;C
  </div>
  <div
    class={`unit ${$unit !== 'metric' && chosen}`}
    on:click={() => unit.set('imperial')}
  >
    &deg;F
  </div>
</div>

<style>
  .unit {
    @apply w-10 text-center text-lg font-bold rounded-full cursor-pointer;
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

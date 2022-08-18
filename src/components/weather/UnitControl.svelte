<script>
  import { unit } from '../../stores/weather';
</script>

<div class="flex flex-row border-2 border-white rounded-full bg-clip-content">
  <div
    class={`unit ${$unit === 'metric' && 'chosen'}`}
    on:click={() => unit.set('metric')}
  >
    &deg;C
  </div>
  <div
    class={`unit ${$unit !== 'metric' && 'chosen'}`}
    on:click={() => unit.set('imperial')}
  >
    &deg;F
  </div>
</div>

<style>
  .unit {
    @apply w-10 text-center text-lg font-bold rounded-full cursor-pointer;
  }

  .chosen {
    @apply bg-white text-black;
    mix-blend-mode: screen;
  }
</style>

<script>
  import { region } from '../stores/setting';
  import UnitControl from './weather/UnitControl.svelte';
</script>

<nav
  class="flex items-center justify-between p-2 w-full {$region} bg-opacity-10"
>
  <span class="text-4xl font-bold">Meteo</span>
  <div class="flex items-center space-x-2">
    <UnitControl />
    <a
      href="https://github.com/viethung7899/meteo"
      class="p-2 flex justify-center h-full hover:{$region} hover:bg-opacity-20 rounded-md"
    >
      <i class="fa-brands fa-github h-6 aspect-square" />
    </a>
  </div>
</nav>

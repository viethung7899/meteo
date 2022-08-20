<script lang="ts">
  import { region } from '@stores/setting';

  export let globalMin: number;
  export let globalMax: number;
  export let min: number;
  export let max: number;

  let width = 100;
  let start = 0;
  $: {
    if (globalMax - globalMin !== 0) {
      width = ((max - min) / (globalMax - globalMin)) * 100;
      start = ((min - globalMin) / (globalMax - globalMin)) * 100;
    }
  }
</script>

<div class="w-full {$region} bg-opacity-30 rounded-full h-1.5 hidden xs:block">
  <div
    class="{$region} h-1.5 rounded-full"
    style="width: {width}%; margin-left: {start}%"
  />
</div>

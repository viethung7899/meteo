<script lang="ts">
  import { location } from '../../stores/location';
  import Current from './Current.svelte';
</script>

<div class="mt-5">
  <div class="text-3xl lg:text-4xl font-bold">{$location.name}</div>
  <Current />
</div>

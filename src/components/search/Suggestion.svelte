<script lang="ts">
  import { findCities, type City } from '@api/city';

  import { city, getFullName } from '@stores/city';
  import { isDark } from '@stores/setting';
  import { onDestroy } from 'svelte';

  let timer;
  export let query: string;
  export let focus = true;
  // Delayed promise
  let promise: Promise<City[]> = null;
  $: {
    clearTimeout(timer);
    timer = setTimeout(() => {
      promise = findCities(query);
    }, 1000);
  }

  onDestroy(() => {
    clearTimeout(timer);
  });

  $: bg = $isDark ? 'bg-black' : 'bg-white';
  $: hoverBg = $isDark ? 'hover:bg-white' : 'hover:bg-black';
</script>

{#if promise && focus}
  {#await promise}
    <!-- Loading -->
    <div class="suggestion flex items-center justify-center {bg}">
      <i class="fa-solid fa-spinner py-5 w-8 h-8 fa-spin-pulse" />
    </div>
  {:then cities}
    <!-- Render suggestions -->
    {#if cities}
      {#if cities.length > 0}
        <div class="suggestion py-4 text-lg space-y-2 {bg}">
          {#each cities as c}
            <div
              class="px-4 py-2 {hoverBg} hover:bg-opacity-10 cursor-pointer"
              on:mousedown={() => {
                city.set(c);
                focus = false;
              }}
            >
              {getFullName(c)}
            </div>
          {/each}
        </div>
      {:else}
        <div class="suggestion p-4 text-xl italic {bg}">
          <i class="fa-solid fa-triangle-exclamation mr-2" />
          No city found
        </div>
      {/if}
    {/if}
  {:catch _error}
    <div class="suggestion p-4 text-xl">
      <i class="fa-solid fa-triangle-exclamation mr-2 {bg}" />
      An error has occurred
    </div>
  {/await}
{/if}

<style>
  .suggestion {
    @apply absolute top-full bg-opacity-50 mt-0.5 rounded-md w-full backdrop-blur-md z-10;
  }
</style>

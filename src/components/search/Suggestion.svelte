<script lang="ts">
  import { getFakeCities, type City } from '../../api/city';

  import { onDestroy } from 'svelte';
  import { location } from '../../stores/location';

  let timer;
  export let query: string;
  export let focus = true;
  export let afterClick: () => void;
  // Delayed promise
  let promise: Promise<City[]> = null;
  $: {
    clearTimeout(timer);
    timer = setTimeout(() => {
      promise = getFakeCities(query);
    }, 1000);
  }

  onDestroy(() => {
    clearTimeout(timer);
  });
</script>

{#if promise && focus}
  {#await promise}
    <!-- Loading -->
    <div class="suggestion flex items-center justify-center">
      <i class="fa-solid fa-spinner py-5 w-8 h-8 fa-spin-pulse" />
    </div>
  {:then cities}
    <!-- Render suggestions -->
    {#if cities}
      {#if cities.length > 0}
        <div class="suggestion py-4 text-lg space-y-2">
          {#each cities as city}
            {@const cityString = `${city.city}, ${city.region}, ${city.country}`}
            <div
              class="px-4 py-2 hover:bg-white hover:bg-opacity-10 cursor-pointer"
              on:click={() => {
                location.set({
                  name: cityString,
                  latitude: city.latitude,
                  longitude: city.longitude,
                });
                afterClick();
              }}
            >
              {cityString}
            </div>
          {/each}
        </div>
      {:else}
        <div class="suggestion p-4 text-xl italic">
          <i class="fa-solid fa-triangle-exclamation mr-2" />
          No city found
        </div>
      {/if}
    {/if}
  {:catch _error}
    <div class="suggestion p-4 text-xl">
      <i class="fa-solid fa-triangle-exclamation mr-2" />
      An error has occurred
    </div>
  {/await}
{/if}

<style>
  .suggestion {
    @apply absolute top-full bg-black bg-opacity-50 mt-0.5 rounded-md w-full backdrop-blur-sm;
  }
</style>

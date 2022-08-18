<script lang="ts">
  import { findCities, type City } from '../../api/city';

  export let query: string;
  export let onFinish: (result: string) => void;
  let focus = true;
  let promise: Promise<City[]> = null;
  $: {
    focus = true;
    promise = query.trim() ? findCities(query, 5) : null;
  }
</script>

{#if focus && promise}
  {#await promise}
    <div class="suggestion py-2 flex items-center justify-center">
      <i class="fa-solid fa-spinner py-5 w-8 h-8 fa-spin-pulse" />
    </div>
  {:then cities}
    {#if cities.length > 0}
      <div class="suggestion py-2">
        {#each cities as city}
          {@const cityString = `${city.city}, ${city.region}, ${city.country}`}
          <div
            class="p-2 hover:bg-white hover:bg-opacity-10 cursor-pointer"
            on:click={() => {
              onFinish(cityString);
              focus = false;
            }}
          >
            {cityString}
          </div>
        {/each}
      </div>
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
    @apply absolute top-full bg-black bg-opacity-50 mt-0.5 rounded-md w-full;
  }
</style>

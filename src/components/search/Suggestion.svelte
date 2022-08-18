<script lang="ts">
  import { findCities } from '../../api/city';

  export let query: string;
  $: promise = findCities(query, 5).then((reponse) => reponse.data.data);
</script>

{#await promise}
  <div
    class="absolute top-full bg-black bg-opacity-50 mt-0.5 rounded-md w-full py-2 flex items-center justify-center"
  >
    <i class="fa-solid fa-spinner py-5 w-8 h-8 fa-spin-pulse" />
  </div>
{:then cities}
  <div
    class="absolute top-full bg-black bg-opacity-50 mt-0.5 rounded-md w-full py-2"
  >
    {#each cities as city}
      <div class="p-2 hover:bg-white hover:bg-opacity-10">
        {city.city}, {city.region}, {city.country}
      </div>
    {/each}
  </div>
{:catch _error}
  <div
    class="absolute top-full bg-black bg-opacity-50 mt-0.5 rounded-md w-full p-4 text-xl"
  >
    <i class="fa-solid fa-triangle-exclamation mr-2" />An error has occurred
  </div>
{/await}

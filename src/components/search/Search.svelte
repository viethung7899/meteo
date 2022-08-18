<script lang="ts">
  import { isDark } from '../../util/store';
import Suggestion from './Suggestion.svelte';

  $: ringColor = $isDark ? 'ring-white' : 'ring-black';
  $: placeHolder = $isDark
    ? 'placeholder:text-white'
    : 'placeholder:text-black';

  let query = '';
  let timer;

  const debounce = (value: string) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      query = value;
    }, 1000);
  };
</script>

<div class="flex items-center w-full px-5 max-w-xl">
  <div
    class="relative flex flex-1 items-center opacity-60 focus-within:opacity-100"
  >
    <i class="fa-solid fa-magnifying-glass absolute pl-3 w-5 h-5" />
    <input
      type="name"
      class="border-none ring-2 {ringColor} {placeHolder} placeholder:text-opacity-50 border-opacity-5 bg-transparent text-2xl pl-10 pr-3 py-3 rounded-md outline-0 w-full"
      placeholder="Search for a city..."
      autocomplete="off"
      aria-label="Search city"
      on:keyup={(e) => debounce(e.currentTarget.value)}
    />
    <!-- Search suggestion -->
    {#if query}
      <Suggestion query={query} />
    {/if}
  </div>
  <button
    class="ml-2 p-2 flex items-center justify-center hover:bg-black hover:bg-opacity-20 rounded-full"
  >
    <i class="fa-solid fa-location-arrow h-8 w-8" />
  </button>
</div>

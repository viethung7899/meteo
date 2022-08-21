<script lang="ts">
  import { isDark } from '@stores/setting';
  import NavigationButton from './NavigationButton.svelte';
  import Suggestion from './Suggestion.svelte';

  $: ringColor = $isDark ? 'ring-white' : 'ring-black';
  $: placeHolder = $isDark
    ? 'placeholder:text-white'
    : 'placeholder:text-black';

  // Input states
  let value = ''; // Input value

  // Focus state
  let focus = false;

</script>

<div class="flex items-center">
  <form
    class="relative flex flex-1 items-center opacity-60 focus-within:opacity-100"
  >
    <i class="fa-solid fa-magnifying-glass absolute pl-3 w-5 h-5" />
    <input
      type="name"
      class="border-none ring-2 {ringColor} {placeHolder} placeholder:text-opacity-50 border-opacity-5 bg-transparent text-2xl pl-10 pr-3 py-3 rounded-md outline-0 w-full"
      placeholder="Search for a city..."
      autocomplete="off"
      aria-label="Search city"
      bind:value
      on:focus={() => (focus = true)}
      on:blur={() => (focus = false)}
    />
    <!-- Search suggestion -->
    <Suggestion query={value} bind:focus />
  </form>
  <NavigationButton />
</div>

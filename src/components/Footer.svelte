<script>
  import {region} from "@stores/setting";
</script>


<footer class="text-center {$region} bg-opacity-10 w-full p-2">
  Made with <a href="https://svelte.dev/">Svelte</a> and passion. Powered by <a href="http://geodb-cities-api.wirefreethought.com">GeoDBCity</a> and <a href="https://openweathermap.org/api">OpenWeatherMap</a>.
</footer>

<style>
  a {
    @apply font-bold hover:underline;
  }
</style>
<script lang="ts">
  import Footer from './components/Footer.svelte';
  import Main from './components/Main.svelte';
  import Nav from './components/Nav.svelte';
  import './global.scss';
  import { backgroundColor, isDark } from './stores/setting';
  import {city} from './stores/city';
  $: textColor = $isDark ? 'text-white' : 'text-black';

  $: title = $city ? `Weather in ${$city.city}` : "Weather App"
</script>

<svelte:head>
  <title>Meteo | {title}</title>
  <meta name="theme-color" content="{$backgroundColor}">
</svelte:head>

<div
  class="app flex flex-col {textColor} w-screen min-h-screen mx-auto flex flex-col items-center"
  style:background-color={$backgroundColor}
>
  <Nav />
  <Main />
  <Footer />
</div>

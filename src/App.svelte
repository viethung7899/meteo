<script lang="ts">
  import Footer from './components/Footer.svelte';
  import Main from './components/Main.svelte';
  import Nav from './components/Nav.svelte';
  import './global.scss';
  import { backgroundColor, isDark } from './util/store';
  $: textColor = $isDark ? 'text-white' : 'text-black';
</script>

<div
  class="app flex flex-col {textColor} w-screen h-screen mx-auto flex flex-col items-center"
  style:background-color={$backgroundColor}
>
  <Nav />
  <Main />
  <Footer />
</div>

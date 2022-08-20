<script lang="ts">
  import {region} from '@stores/setting'

  export let message: string;
</script>

<div class="{$region} bg-opacity-20 w-full p-4 my-4 text-xl rounded-md">
  <i class="fa-solid fa-triangle-exclamation mr-2" />
  {message}
</div>
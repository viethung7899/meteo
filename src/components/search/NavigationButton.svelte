<script>
  import { getNearestCityByGeoLocation } from '@api/city';
  import { city } from '@stores/city';

  const handleClick = () => {
    console.log('click');
    navigator.geolocation.getCurrentPosition(async ({ coords }) => {
      const { latitude, longitude } = coords;
      const nearest = await getNearestCityByGeoLocation(latitude, longitude);
      if (!nearest) return;
      city.set(nearest);
    });
  };
</script>

<button
  class="ml-2 p-2 flex items-center justify-center hover:bg-black hover:bg-opacity-20 rounded-full"
  on:click={handleClick}
>
  <i class="fa-solid fa-location-arrow h-8 w-8" />
</button>

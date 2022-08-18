<script lang="ts">
  import { location } from '../../stores/location';
</script>

<div>City: {$location?.name || "Not found"}</div>
<div>Latitude: {$location?.latitude || "Not found"}</div>
<div>Longitude: {$location?.longitude || "Not found"}</div>

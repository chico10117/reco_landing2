<!--
  Debug component to show geolocation data
  Remove this in production or make it admin-only
-->

<script lang="ts">
  import { getGeolocationData, formatLocation, isFromLatinAmerica } from '$lib/utils/geolocation';
  import type { PageData } from '../../../routes/$types';
  
  let { data } = $props<{ data: PageData }>();
  
  const geo = getGeolocationData(data);
  const locationString = formatLocation(geo);
  const isLatinAmerica = isFromLatinAmerica(geo);
</script>

<!-- Only show in development or if you want to debug -->
{#if data?.detectedCountry}
<div class="fixed bottom-4 right-4 bg-black/80 text-white text-xs p-3 rounded-lg font-mono max-w-sm">
  <div class="font-semibold mb-2">🌍 Location Debug</div>
  <div>📍 {locationString}</div>
  {#if geo.country}
    <div>🏳️ Country: {geo.country}</div>
  {/if}
  {#if geo.city}
    <div>🏙️ City: {geo.city}</div>
  {/if}
  {#if geo.region}
    <div>📍 Region: {geo.region}</div>
  {/if}
  {#if geo.postalCode}
    <div>📮 Postal: {geo.postalCode}</div>
  {/if}
  <div>🗣️ Language: {geo.suggestedLanguage}</div>
  <div>🌎 LATAM: {isLatinAmerica ? 'Yes' : 'No'}</div>
</div>
{/if}
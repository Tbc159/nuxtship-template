<script setup>
const url_api =
  "https://bin-dev.pockethost.io/api/collections/blog/records?sort=data";

const { pending, data, error } = await useLazyFetch(url_api, {
  lazy: true,
  server: false,
});
</script>

<template>
  <div v-if="pending">
    <span class="loading loading-spinner loading-md"></span>
  </div>
  <div v-else>
    <EventiLista :eventi="data.items" />
  </div>
</template>
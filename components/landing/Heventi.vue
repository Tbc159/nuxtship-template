<script setup>
const today = new Date();
const tenDaysLater = new Date(today);
tenDaysLater.setDate(today.getDate() + 10);

const formattedToday = today.toISOString().split("T")[0];
const formattedTenDaysLater = tenDaysLater.toISOString().split("T")[0];

const url_api = `https://bin-dev.pockethost.io/api/collections/eventi/records?sort=data&filter=(data%3E=%22${formattedToday}%22 %26%26 data%3C=%22${formattedTenDaysLater}%22)`;

const { pending, data, error } = await useLazyFetch(url_api, {
  lazy: true,
  server: false,
});

const isLoading = computed(() => (process.server ? true : pending.value));
</script>

<template>
  <EventiButton />
  <EventiColosseum />
  <div v-if="isLoading">
    <span class="loading loading-spinner loading-xs"></span>
  </div>
  <div v-else>
    <EventiCarousel :eventi="data?.items ?? []" />
  </div>
</template>

<script setup>
const { id } = useRoute().params;
const url_api = `https://overpass-api.de/api/interpreter?data=[out:json];nwr(id:${id});out meta;`;

/* This call is performed before hydration */
// var { data } = await useFetch(url_api);

/* This call will only be performed on the client */
const { pending, data, error } = await useLazyFetch(url_api, {
  lazy: true,
  server: false,
});

// this call will be performed server side
// const { data } = await useAsyncData("data", () => $fetch(url_api,));

definePageMeta({
  layout: "main",
});
</script>

<template>
  <LandingContainer>
    <div v-if="pending">
      <UiSkeleton />
    </div>
    <div v-else>
        <OsnPage v-if="data?.elements.length>0" :data="data?.elements[0]" />
      </div>
    <!-- </div> -->
    <LandingDisclaimer />

  </LandingContainer>
</template>

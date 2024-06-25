<script setup>

const { id }  = useRoute().params;
const url_api  = `/data/community/${id}.json`;

/* This call is performed before hydration */
// var { data } = await useFetch(url_api);

/* This call will only be performed on the client */
const { pending, data, error } = await useLazyFetch(url_api, {
  lazy: true,
  server: false
});

definePageMeta({
  layout: "landing",
});

</script>

<template>
  <LandingContainer>
    <div v-if="pending">
      Loading ...
    </div>
    <div v-else>
      <ComunitaCpage :data="data" />
    </div>    
  </LandingContainer>
</template>

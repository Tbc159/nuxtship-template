<script setup>
const props = defineProps(["data"]);

const breadcrumb = computed(() => [
  {
    label: "psp",
    path: "/psp",
  },
  {
    label: props.data.items[0].titolo,
  },
]);

</script>
<template>
  <div v-if="data.items">
    <div v-for="item in data.items">
      <LandingSectionhead>
        <template v-slot:title>{{ item.titolo }}</template>
        <template v-slot:desc>Sisitema di pagamento bitcoin</template>
      </LandingSectionhead>

      <LandingBreadcrumb :voci="breadcrumb" />

      <div v-if="item.descrizione" class="mt-8" v-html="item.descrizione"></div>

      <div class="flex my-4">
        <OsnTagwebsite v-if="item.sitoweb" :url="item.sitoweb" />
      </div>
    </div>
  </div>
</template>

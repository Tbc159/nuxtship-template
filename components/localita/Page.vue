<script setup>
const props = defineProps(["data"]);

const breadcrumb = computed(() => [
  {
    label: "comunità",
    path: "/comunita",
  },
  {
    label: props.data.name,
  },
]);

useHead({
  title: props?.data?.name + " | Bitcoin Italia Network",
  link: [
    {
      rel: "canonical",
      href: `https://bitcoinitalianetwork.com/l/${props?.data?.id}`,
    },
  ],
  meta: [
    {
      property: "og:image",
      content:
        "https://bitcoinitalianetwork.com/img/l/" + props.data.id + ".jpg",
    },
  ],
});
</script>

<template>
  <div>
    <LandingSectionhead>
      <template v-slot:title>{{ data.name }}</template>
      <template v-slot:desc>{{ data.name }}</template>
    </LandingSectionhead>
    <div class="grid place-items-center pt-4">
      <NuxtImg
        :src="`/img/l/${data.id}.jpg`"
        format="webp"
        class="aspect-square max-h-96 rounded-md"
      />
    </div>
    <LandingBreadcrumb :voci="breadcrumb" />
  </div>

  <LocalitaEventi :city="data?.name" />

  <LocalitaMeetup :data="data" />

  <div class="md:w-full">
    <LMap
      style="height: 300px"
      :zoom="9"
      :center="[data.lng, data.lat]"
      :use-global-leaflet="false"
    >
      <LTileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&amp;copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        layer-type="base"
        name="OpenStreetMap"
      />
      <ComunitaPoimarker v-for="poi of data.poi" :poi="poi" />
    </LMap>
  </div>

  <ComunitaPoislist :datapois="data.poi" />
  <LandingDisclaimer />
</template>
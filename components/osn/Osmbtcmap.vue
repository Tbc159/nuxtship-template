<script setup>
const props = defineProps(["data"]);
</script>
<template>
  <div class="flex gap-2 py-2">
    <OnwOsm :id="data.id" />
    <!-- <a
      :href="'https://www.openstreetmap.org/node/' + data.id"
      target="_blank"
      class="text-sm"
    >
      <MainBadge
        icona="simple-icons:openstreetmap"
        testo="openstreetmap"
      />
    </a> -->
    <a
      v-if="data.tags['currency:XBT'] === 'yes'"
      :href="'https://btcmap.org/merchant/'+data.type+':' + data.id"
      target="_blank"
      class="text- text-sm"
      ><MainBadge
        icona="hugeicons:bitcoin-location"
        testo="btcmap"
    /></a>
  </div>
</template>
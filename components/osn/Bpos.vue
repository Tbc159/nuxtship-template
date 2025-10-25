<script>
export default {
  props: {
    pending: {
      required: true,
    },
    dbdata: {
      required: true,
    },
    data: {
      required: true,
    },
  },
};
</script>

<template>
  <span v-if="!pending">
    <OsnMapbadge
      v-if="dbdata?.items[0]?.bing"
      etichetta="posizione"
      :url="dbdata?.items[0]?.bing"
      icona="tabler:brand-bing"
    />

    <OsnMapbadge
      v-else
      etichetta="posizione"
      :url="'https://www.bing.com/maps?cp=' + usePoiLat(data) + '~' + usePoiLon(data) + '&lvl=20'"
      icona="tabler:brand-bing"
    />
  </span>

  <OsnMapbadge
    v-else
    etichetta="posizione"
    :url="'https://www.bing.com/maps?cp=' + data.lat + '~' + data.lon + '&lvl=20'"
    icona="tabler:brand-bing"
  />
</template>

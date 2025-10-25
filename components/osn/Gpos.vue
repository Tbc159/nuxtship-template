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
      v-if="dbdata?.items[0]?.gmap"
      etichetta="posizione"
      :url="dbdata?.items[0]?.gmap"
      icona="material-symbols:location-on"
    />

    <OsnMapbadge
      v-else
      etichetta="posizione"
      :url="'https://maps.google.com/maps?z=12&t=m&q=loc:' + usePoiLat(data) + '+' + usePoiLon(data)"
      icona="material-symbols:location-on"
    />
  </span>

  <OsnMapbadge
    v-else
    etichetta="posizione"
    :url="'https://maps.google.com/maps?z=12&t=m&q=loc:' + usePoiLat(data) + '+' + usePoiLon(data)"
    icona="material-symbols:location-on"
  />
</template>

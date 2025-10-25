<script>
export default {
  props: {
    data: {
      required: true,
    },
    pending: {
      required: false,
    },
    dbdata: {
      required: false,
    },
  },
};
</script>

<template>
  <!-- <UiRivela title="dati" :description="data" /> -->
  <div
    v-if="usePoiLat(data) && usePoiLon(data)"
    class="relative inline-block text-sm p-1 mt-2 mb-5 shadow ring-1 ring-gray-900/5 max-w-lg rounded-lg"
  >
    <div class="pl-4 p-1">altre mappe</div>
    <div class="flex flex-wrap">
      <div class="border">
        <div class="text-center p-2">
          <OsnGmaplink :pending="pending" :dbdata="dbdata" />
        </div>
        <div class="flex">
          <OsnGpos :pending="pending" :dbdata="dbdata" :data="data" />
          <OsnMapbadge
            etichetta="streetview"
            :url="
              'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=' +
              usePoiLat(data) +
              ',' +
              usePoiLon(data)
            "
            icona="material-symbols:streetview"
          />
          <OsnMapbadge
            etichetta="direzioni"
            :url="
              'https://maps.google.com/maps?daddr=(' +
              usePoiLat(data) +
              ',' +
              usePoiLon(data) +
              ')'
            "
            icona="material-symbols:directions"
          />
        </div>
      </div>

      <div class="border">
        <div class="text-center p-2">
          <OsnBing :pending="pending" :dbdata="dbdata" label="bing" />
        </div>
        <OsnBpos :pending="pending" :dbdata="dbdata" :data="data" />
      </div>
    </div>
  </div>
</template>
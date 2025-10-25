<script setup>
defineProps(["poi"]);
</script>

<template>
  <div v-if="poi?.tags">
  <NuxtLink :to="usePoiLink(poi)">
      <OnwXbtindicator :tags="poi?.tags">
        <div class="flex flex-wrap p-2 border-1 my-2 rounded shadow">
          <div class="text-primary font-bold pr-2">
            {{ useTagsname(poi?.tags) }}
          </div>
          <div class="pr-2">
            <span v-if="poi?.tags['addr:place']">
              {{ poi.tags["addr:place"] }}&nbsp;
            </span>
            <span v-if="poi.tags['addr:district']">
              {{ poi.tags["addr:district"] }}&nbsp;
            </span>
            <OsnStreetNum :tags="poi?.tags" />
          </div>
          <div class="text-accent pr-2">
            <OsnCitta :tags="poi?.tags" />
          </div>
          <!-- <div>{{poi}}</div> -->
          <!-- <div class="text-gray-400">
            <OsnTipovenue :tags="poi?.tags" />
          </div> -->
        </div>
      </OnwXbtindicator>
    </NuxtLink>
  </div>
</template>

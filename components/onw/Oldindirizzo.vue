<script setup>
const props = defineProps(["tags"]);
</script>
<template>
  <div class="bg-warning">
    <h2>OLD - Indirizzo</h2>
    <div class="p-2" v-if="tags">
      <p v-if="tags['addr:place']">
        <span>
          {{ tags["addr:place"]
          }}<span v-if="tags['addr:housenumber']"
            >, {{ tags["addr:housenumber"] }}</span
          >
        </span>
      </p>
      <p v-if="tags['addr:district']">
        <span>
          {{ tags["addr:district"] }}
        </span>
      </p>
      <p>
        <OsnStreetNum :tags="tags" />
      </p>
      <p v-if="tags['addr:suburb']">
        <span>
          {{ tags["addr:suburb"] }}
        </span>
      </p>
      <p><OnwCapcittapr :tags="tags" /></p>
      <!-- <p v-if="tags['addr:postcode']">
			<span>
			  {{ tags["addr:postcode"] }}
			</span>
		  </p>
		  <p v-if="tags['addr:country']">
			<span>
			  {{ tags["addr:country"] }}
			</span>
		  </p> -->
    </div>
  </div>
</template>
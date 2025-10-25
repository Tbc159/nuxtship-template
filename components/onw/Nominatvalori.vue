<script setup>
const props = defineProps(["address"]);
</script>
<template>
    <div class="font-mono text-sm m-4">
      <p v-if="address.house_number">house_number: {{ address.house_number }}</p>
      <p v-if="address.road">road: {{ address.road }}</p>
      <p v-if="address.neighbourhood">neighbourhood: {{ address.neighbourhood }}</p>
      <p v-if="address.suburb">suburb: {{ address.suburb }}</p>
      <p v-if="address.hamlet">hamlet: {{ address.hamlet }}</p>
      <p v-if="address.village">village: {{ address.village }}</p>
      <p v-if="address.town">town: {{ address.town }}</p>
      <p v-if="address.city">city: {{ address.city }}</p>
      <p v-if="address.county">county: {{ address.county }}</p>
      <p v-if="address.state">state (regione): {{ address.state }}</p>
      <p v-if="address.postcode">postcode: {{ address.postcode }}</p>
      <p v-if="address.country">country: {{ address.country }}</p>
      <p v-if="address.country_code">country_code: {{ address.country_code }}</p>
    </div>
</template>
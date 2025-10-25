<script setup>
const props = defineProps(["address", "tags"]);
</script>
<template>
    <div v-if="address" class="font-mono">
      <p
        v-if="
          address.postcode &&
          address.postcode !== tags['contact:postcode'] &&
          address.postcode !== tags['addr:postcode']
        "
      >
        addr:postcode={{ address.postcode }}
      </p>
      <p
        v-if="
          address.road &&
          address.road !== tags['contact:street'] &&
          address.road !== tags['addr:street']
        "
      >
        addr:street={{ address.road }}
      </p>
      <p v-if="address.hamlet">addr:hamlet={{ address.hamlet }}</p>
      <p v-if="address.village">addr:village={{ address.village }}</p>
      <p
        v-if="
          address.house_number &&
          (address.house_number !== tags['contact:housenumber']) &&
          (address.house_number !== tags['addr:housenumber'])
        "
      >
        addr:housenumber={{ address.house_number }}
      </p>
      <p v-if="address.suburb">addr:suburb={{ address.suburb }}</p>

      <p
        v-if="
          address.city &&
          address.city !== tags['contact:city'] &&
          address.city !== tags['addr:city']
        "
      >
        addr:city={{ address.city }}
      </p>

      <p
        v-if="
          address.town &&
          address.town !== tags['contact:city'] &&
          address.town !== tags['addr:city']
        "
      >
        addr:city={{ address.town }}
      </p>
    </div>	
</template>
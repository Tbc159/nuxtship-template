<script setup>
const props = defineProps(["address", "tags"]);
</script>
<template>
    <div v-if="address">
      <p
        v-if="
          address.postcode &&
          address.postcode !== tags['contact:postcode'] &&
          address.postcode !== tags['addr:postcode']
        "
      >
        CAP {{ address.postcode }}
      </p>
      <p
        v-if="
          address.road &&
          address.road !== tags['contact:street'] &&
          address.road !== tags['addr:street']
        "
      >
        {{ address.road }}
      </p>
      <p v-if="address.hamlet">Frazione: {{ address.hamlet }}</p>
      <p v-if="address.village">Villaggio: {{ address.village }}</p>
      <p
        v-if="
          address.house_number &&
          (address.house_number !== tags['contact:housenumber']) &&
          (address.house_number !== tags['addr:housenumber'])
        "
      >
        {{ address.house_number }}
      </p>
      <p v-if="address.suburb">Sobborgo: {{ address.suburb }}</p>

      <p
        v-if="
          address.city &&
          address.city !== tags['contact:city'] &&
          address.city !== tags['addr:city']
        "
      >
        Città: {{ address.city }}
      </p>

      <p
        v-if="
          address.town &&
          address.town !== tags['contact:city'] &&
          address.town !== tags['addr:city']
        "
      >
        Paese: {{ address.town }}
      </p>

      <p v-if="address.neighbourhood">Vicinato: {{ address.neighbourhood }}</p>

      <div v-if="address.country === 'Italia'">
        <p v-if="address.county">Provincia: 
        <NuxtLink :to="'/provincia/'+useSlugify(address.county)" class="text-primary font-bold">
          {{ address.county }}
        </NuxtLink>
        </p>
        <p v-if="address.state">
          Regione:
          <NuxtLink :to="'/regione/'+useSlugify(address.state)" class="text-primary font-bold">
            {{ address.state }}
          </NuxtLink>
        </p>
      </div>
      <div v-else>
        <p v-if="address.county">Provincia: {{ address.county }}</p>
        <p v-if="address.state">Regione: {{ address.state }}</p>
        <p v-if="address.country">Nazione: {{ address.country }}</p>
      </div>

      <!-- <p v-if="address.country_code">Codice nazione: {{ address.country_code }}</p> -->

    </div>	
</template>
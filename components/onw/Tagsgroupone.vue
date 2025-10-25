<script setup>
const props = defineProps(["data"]);
</script>
<template>

  <!-- <OnwNominatim :lat="usePoiLat(data)" :lon="usePoiLon(data)" /> -->
  <p v-if="data?.tags['disused:amenity']" class="text-red-600 font-bold">
    Attività dismessa
  </p>
  <p v-else-if="data?.tags['disused:shop']" class="text-red-600 font-bold">
    Attività dismessa
  </p>
  <OnwPostaladdress :tags="data?.tags" />
  <OnwEdit :data="data" :lat="usePoiLat(data)" :lon="usePoiLon(data)" />
  
  <OsnTelefoni :tags="data?.tags" />
  <!-- <OsnEventi :idnodosm="data?.id" /> -->\
  <OsnTagyesno
    v-if="data?.tags?.wheelchair"
    icona="ph:wheelchair-light"
    etichetta="Sedie a rotelle"
    :testo="data?.tags?.wheelchair"
  />
  <OsnTagsit :tags="data?.tags" />
  <OsnTagyesno
    v-if="data.tags['outdoor_seating']"
    icona="ph:sun-bold"
    etichetta="Posti all'aperto"
    :testo="data.tags['outdoor_seating']"
  />
  <OnwOperator v-if="data?.tags?.operator" :operator="data?.tags?.operator" />


  <OnwTag
    v-if="data.tags['currency:XBT:discount']"
    icona="streamline:discount-percent-circle"
    etichetta="sconto bitcoin"
    :testo="data.tags['currency:XBT:discount']"
  />
  <OsnTagyesno
    v-if="data.tags['payment:lightning']"
    icona="ph:lightning"
    etichetta="Pagamento con lightning"
    :testo="data.tags['payment:lightning']"
  />
  <OsnTagyesno
    v-if="data.tags['payment:lightning_contactless']"
    icona="ph:lightning"
    etichetta="Lightning contactless"
    :testo="data.tags['payment:lightning_contactless']"
  />
  <OsnTagyesno
    v-if="data.tags['payment:onchain']"
    icona="akar-icons:link-chain"
    etichetta="Pagamento on-chain"
    :testo="data.tags['payment:onchain']"
  />
  <OnwTag
    v-if="data.tags['opening_hours']"
    icona="material-symbols:nest-clock-farsight-analog-outline"
    etichetta="orari apertura"
    :testo="data.tags['opening_hours']"
  />
  <div v-if="data?.tags?.note">{{ data?.tags?.note }}</div>

  <OnwTag
    v-if="data?.tags['ref:msal']"
    icona="tabler:hexagon-letter-h"
    etichetta="codice Ministero della Salute (MSAL)"
    :testo="data?.tags['ref:msal']"
  />

  <OnwTag
    v-if="data?.tags?.brand"
    icona="tabler:brand-pagekit"
    etichetta="Brand"
    :testo="data?.tags?.brand"
  />

  <OnwBrandwikidatatag :data="data" />

  <OnwBrandwikipedia :data="data" />

</template>
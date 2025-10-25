<script setup>
const props = defineProps(["tags"]);
</script>
<template>
  <OsnTel
    v-if="tags?.phone"
    icona="material-symbols:call"
    etichetta="Telefono"
    :telefono="tags?.phone"
  />
  <OsnTel
    v-if="tags?.mobile"
    icona="clarity:mobile-line"
    etichetta="Cell"
    :telefono="tags?.mobile"
  />

  <OsnTel
    v-if="tags['contact:phone']"
    icona="material-symbols:call"
    etichetta="Telefono"
    :telefono="tags['contact:phone']"
  />
  <OsnTel
    v-if="tags['contact:mobile']"
    icona="clarity:mobile-line"
    etichetta="Cell"
    :telefono="tags['contact:mobile']"
  />
  <OsnTel
    v-if="tags['phone:mobile']"
    icona="ic:baseline-phone-iphone"
    etichetta="Cell"
    :telefono="tags['phone:mobile']"
  />

    <OsnTel
    v-if="tags['contact:fax']"
    icona="noto-v1:fax-machine"
    etichetta="fax"
    :telefono="tags['contact:fax']"
  />
</template>
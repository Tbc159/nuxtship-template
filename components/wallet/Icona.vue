<script>
export default {
  props: {
    att: {
      required: true,
    },
    campo: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
  <span class="w-4">
    <Icon v-if="campo == 's'" :name="att.icona" size="16" :color="att.colore" />
    <Icon v-else :name="att.icona" size="16" color="#eee" />
  </span>
</template>

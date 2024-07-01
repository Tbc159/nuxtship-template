<script>
export default {
  props: {
    att: {
      required: true,
    },
  },
};
</script>

<template>
	<div class="object-center">
		<Icon :name="att.icona" size="16" :color="att.colore" />
	</div>
    <div>
      <p class="text-gray-800">{{ att.titolo }}</p>
      <p class="text-gray-500 text-sm">{{ att.descrizione }}</p>
    </div>
</template>

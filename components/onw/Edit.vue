<script setup>
const props = defineProps(["data","lat","lon"]);
</script>
<template>
	<!-- <NuxtLink
		:to="`https://www.openstreetmap.org/edit?${data.type}=${data.id}`"
		class="text-sm text-blue-600 hover:underline"
		target="_blank"
		rel="noopener noreferrer">
		<button class="btn">OsnMap</button>
	</NuxtLink>
	<OsnXmaps :data="data" :pending="pending" :dbdata="dbdata" /> -->
	<OnwNominatim :lat="lat" :lon="lon" :tags="data.tags" />

</template>
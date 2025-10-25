<script setup>
const props = defineProps(["wikidataentities"]);

useHead({
	title: props?.wikidataentities?.labels?.it?.value + " | Bitcoin Italia Network",
});
</script>

<template>
	<LandingSectionhead>
		<template v-slot:title>
			{{wikidataentities?.labels?.it?.value}}
		</template>
		<template v-slot:desc>
			{{wikidataentities?.descriptions?.it?.value}}
		</template>
	</LandingSectionhead>	
</template>
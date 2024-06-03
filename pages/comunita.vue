<script setup>
definePageMeta({
  layout: "landing",
});
</script>

<template>
	<LandingContainer>
		<LandingSectionhead>
      <template v-slot:title>Comunità Bitcoin in Italia</template>
      <template v-slot:desc>Le comunità locali italiane.</template>
    </LandingSectionhead>
		<LandingIframapas></LandingIframapas>
	</LandingContainer>
</template>

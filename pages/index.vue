<script setup>

useHead({
  title: 'Bitcoin Italia Network',
});

definePageMeta({
  layout: "landing",
});
</script>

<template>
  <LandingContainer>
    <LandingHero></LandingHero>
    <LandingSlide></LandingSlide>
    <LandingHeventi></LandingHeventi>
    <LandingSlogan></LandingSlogan>
    <LandingFeatures></LandingFeatures>
    <LandingCta></LandingCta>
  </LandingContainer>
</template>
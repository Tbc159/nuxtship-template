<script setup>
import '~/assets/css/orange-custom.css'
definePageMeta({
  layout: "landing",
});
</script>

<template>
  <LandingContainer>
    <LandingHero></LandingHero>
    <LandingFeatures></LandingFeatures>
    <LandingLogos></LandingLogos>
    <LandingCta></LandingCta>
  </LandingContainer>
</template>

<style>
@import url("~/assets/css/orange-custom.css");
</style>
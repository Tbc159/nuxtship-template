<script setup>
useHead({
  title: "PSP Payment Service Provider | Bitcoin Italia Network",
  link: [
    {
      rel: "canonical",
      href: "https://bitcoinitalianetwork.com/psp",
    },
  ],
});

definePageMeta({
  layout: "main",
});

const psp = [
  { nome: "B4B - Villaggio Bitcoin", url: "/xt/psp/villaggiobitcoin", img: "/img/psp/villaggiobitcoin.svg", },
  { nome: "Coinbar Pay", url: "/xt/psp/coinbar", img: "/img/psp/coinbar.svg" },
  { nome: "Bitcoin People", url: "/xt/psp/bitcoinpeople", img: "/img/psp/bitcoinpeople.svg", },
  { nome: "inbitcoin", url: "/xt/psp/inbitcoin", img: "/img/psp/inbitcoin.svg", },
  { nome: "🇨🇭 Swiss Bitcoin Pay", url: "/xt/psp/swissbitcoinpay", img: "/img/psp/swissbitcoinpay.svg", },
  { nome: "DataSapiens", url: "/xt/psp/datasapiens", img: "/img/psp/datasapiens.svg", },
];

const breadcrumb = computed(() => [
  {
    label: "psp payment service provider",
  },
]);
</script>

<template>
  <LandingContainer>
    <LandingSectionhead>
      <template v-slot:title>PSP Payment Service Provider</template>
      <template v-slot:desc
        >I sistemi per gestire i pagamenti in Bitcoin</template
      >
    </LandingSectionhead>

    <!-- <LandingMainimg urlimg="/img/features/formazione.jpg" /> -->

    <LandingBreadcrumb :voci="breadcrumb" />

    <div class="flex flex-wrap">
      <div v-for="ipsp of psp" class="m-2">
        <NuxtLink :to="ipsp.url">
          <UiCard
            :title="ipsp.nome"
            :buttonText="ipsp.nome"
            :imageSrc="ipsp.img"
          />
        </NuxtLink>
      </div>
    </div>
  </LandingContainer>
</template>
  
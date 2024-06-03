<script setup>
definePageMeta({
  layout: "landing",
});

const pricing = [
  {
    name: "Personale",
    price: "Free",
    popular: false,
    features: [
      "Gratuito",
      "Accesso ai corsi pubblici",
      "Avvisi sugli eventi",
      "Newsletter",
      "Integrazione basic",
      "Accesso sezioni comunità",
    ],
    button: {
      text: "Aderisci subito",
      link: "/contact",
    },
  },
  {
    name: "Professionale",
    price: {
      monthly: "€9.99",
      annual: "€99.99",
      discount: "FREE",
      original: "FREE",
    },
    popular: true,
    features: [
      "Tutte le opzioni gratuite",
      "Sconto 20% sullo store",
      "5 eventi all'anno",
      "Prevendita conferenze",
      "Codici sconto sui punti vendita",
      "Supporto prioritario",
    ],
    button: {
      text: "Aderisci subito",
      link: "/contact",
    },
  },
  {
    name: "Impresa",
    price: "Contattaci",
    popular: false,
    features: [
      "Tutte le caratteristiche pro",
      "Corsi personalizzati",
      "Promozione eventi",
      "Integrazione con le mappe",
      "Campagne personalizzate",
      "Supporto telefonico",
    ],
    button: {
      text: "Contattaci",
      link: "/contact",
    },
  },
];
</script>

<template>
  <LandingContainer>
    <LandingSectionhead>
      <template v-slot:title>Prezzi</template>
      <template v-slot:desc
        >Prezzi semplici e prevedibili. Senza sorprese.</template
      >
    </LandingSectionhead>

    <div class="grid md:grid-cols-3 gap-10 mx-auto max-w-screen-lg mt-12">
      <LandingPricing v-for="item of pricing" :plan="item" />
    </div>
  </LandingContainer>
</template>

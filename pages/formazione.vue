<script setup>

useHead({
  title: 'Formazione | Bitcoin Italia Network',
  link: [
    {
      rel: 'canonical',
      href: 'https://bitcoinitalianetwork.com/formazione',
    },
  ],
});

definePageMeta({
  layout: "main",
});

const corsi = [
  {
    nome: "Bitcoin Report School",
    url: "https://bitcoinreport.github.io/Bitcoin-Report-School/",
    desc: "Capire bitcoin dal codice.",
    img: "/img/features/reportschool.png"
  },
  {
    nome: "Wallet",
    url: "/wallet",
    desc: "Scegli e configura il tuo portafoglio Bitcoin in modo sicuro.",
    img: "/img/features/dove.jpg"
  },
  {
    nome: "Hardware Wallet",
    url: "/hwallet",
    desc: "Proteggi i tuoi fondi con i migliori dispositivi hardware sul mercato.",
    img: "/img/features/formazione.jpg"
  },
  {
    nome: "Libri Bitcoin",
    url: "/libriamazon",
    desc: "Una selezione dei migliori libri in italiano per approfondire.",
    img: "/img/features/documentazione.jpg"
  },
  {
    nome: "Podcast",
    url: "/podcast",
    desc: "Ascolta i migliori podcast italiani dedicati al mondo Bitcoin.",
    img: "/img/features/comunita.jpg"
  },
  {
    nome: "Documenti",
    url: "/documentazione",
    desc: "Accedi a risorse tecniche e guide fondamentali.",
    img: "/img/features/documentazione.jpg"
  },
];
</script>

<template>
  <LandingContainer>
    <LandingSectionhead>
      <template v-slot:title>Formazione</template>
      <template v-slot:desc
        >Percorsi e risorse selezionate per approfondire la tua conoscenza di Bitcoin.</template
      >
    </LandingSectionhead>

    <div class="grid sm:grid-cols-2 md:grid-cols-3 mt-12 gap-8">
      <div v-for="corso of corsi" :key="corso.url" class="flex">
        <LandingScheda
          :url="corso.url"
          :img="corso.img"
          :description="corso.desc"
          :title="corso.nome"
          class="w-full"
        />
      </div>
    </div>
  </LandingContainer>
</template>

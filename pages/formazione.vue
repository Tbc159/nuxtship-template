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
    nome: "Wallet",
    url: "/wallet",
  },
  {
    nome: "Hardware Wallet",
    url: "/hwallet",
  },
  {
    nome: "Libri Bitcoin in Italiano da acquistare su Amazon",
    url: "/libriamazon",
  },
  {
    nome: "Podcast Bitcoin in Italiano",
    url: "/podcast",
  },
  {
    nome: "Documenti",
    url: "/documentazione",
  },
];
</script>

<template>
  <LandingContainer>
    <LandingSectionhead>
      <template v-slot:title>Formazione</template>
      <template v-slot:desc
        >Le nostre proposte per acquisire competenze.</template
      >
    </LandingSectionhead>

    <LandingMainimg urlimg="/img/features/formazione.jpg" />

    <div class="flex flex-col gap-3 mx-auto max-w-4xl mt-16">
      <div class="mx-auto max-w-md">
        <ul class="space-y-4">
          <li v-for="corso of corsi" class="flex items-center">
            <svg
              class="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="11" />
              <path
                d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                fill="none"
              />
            </svg>
            <p class="ml-4">
              <a
                :href="corso.url"
                class="flex lg:px-3 py-2"
              >
                {{ corso.nome }}
              </a>
            </p>
          </li>
        </ul>
      </div>
    </div>
  </LandingContainer>
</template>

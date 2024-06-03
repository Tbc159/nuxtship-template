<script setup>
const features = [
  {
    title: "Comunità",
    url: "/comunita",
    description:
      "Costituite da appassionati, professionisti e innovatori che condividono la passione per Bitcoin e lavorano insieme per promuoverne conoscenza e adozione sul territorio.",
    icon: "bx:bxs-briefcase",
  },
  {
    title: "Dove usare Bitcoin",
    url: "/dove",
    description:
      "Scopri luoghi e servizi in Italia che accettano Bitcoin, permettendoti di vivere l'esperienza dell'economia digitale decentralizzata.",
    icon: "bx:bxs-window-alt",
  },
  {
    title: "Formazione",
    url: "/",
    description:
      "Questa sezione è pensata per offrirti metterti in condizioni di diventare un utente esperto e sicuro nel mondo di Bitcoin.",
    icon: "bx:bxs-data",
  },
  {
    title: "Documentazione",
    url: "/",
    description:
      "Dedicata a fornire le basi essenziali per i nuovi bitcoiner e contenuti avanzati per i più esperti. Qui troverai risorse utili e informazioni fondamentali.",
    icon: "bx:bxs-bot",
  },
  {
    title: "Eventi, meetup, conferenze",
    url: "/",
    description:
      "Calendari dei meet-up Bitcoin, delle Conferenze Bitcoin in Italia, Eventi organizzati da associazioni e/o scuole, Comuni e istituzioni che accettano Bitcoin",
    icon: "bx:bxs-file-find",
  },
  {
    title: "Sviluppo",
    url: "/",
    description:
      "Sviluppiamo soluzioni su misura per i nostri clienti grazie al contributo di un team dedicato di esperti.",
    icon: "bx:bxs-user",
  },
];
</script>

<template>
  <div class="mt-16 md:mt-0">
    <h2 class="text-4xl lg:text-5xl font-bold lg:tracking-tight">
      Uniamo le realtà Bitcoin Italiane 
    </h2>
    <p class="text-lg mt-4 text-slate-600">
      La nostra missione è creare un punto d'incontro per
      semplici utenti, curiosi, appassionati, esperti, professionisti e aziende, 
      favorendo lo scambio di idee, progetti, prodotti e collaborazioni.
    </p>
  </div>

  <div class="grid sm:grid-cols-2 md:grid-cols-3 mt-16 gap-16">
    <div v-for="item of features" class="flex gap-4 items-start">
      
      <div class="mt-1 bg-black rounded-full p-2 w-8 h-8 shrink-0">
        <Icon class="text-white" :name="item.icon" />
      </div>
      <div><a :href=item.url>
        <h3 class="font-semibold text-lg">{{ item.title }}</h3>
        <p class="text-slate-500 mt-2 leading-relaxed">
          {{ item.description }}
        </p>
      </a>
      </div>
    </div>
  </div>
</template>

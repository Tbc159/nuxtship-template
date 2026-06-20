<script setup>
const props = defineProps(["evento"]);

const breadcrumb = computed(() => {
  const items = [
    {
      label: "Eventi",
      path: "/eventi",
    },
  ];
  if (props.evento?.titolo) {
    items.push({
      label: props.evento.titolo,
    });
  }
  return items;
});

const ogImage = computed(() =>
  props.evento?.img
    ? `https://bin-dev.pockethost.io/api/files/eventi/${props.evento.id}/${props.evento.img}`
    : ""
);

useHead({
  title: computed(() => (props?.evento?.titolo ? `${props.evento.titolo} | Bitcoin Italia Network` : "Evento | Bitcoin Italia Network")),
  link: [
    {
      rel: "canonical",
      href: computed(() => `https://bitcoinitalianetwork.com/evento/${props?.evento?.id || ""}`),
    },
  ],
  meta: [
    {
      property: "og:image",
      content: ogImage,
    },
  ],
});
</script>

<template>
  <LandingSectionhead>
    <template v-slot:title>{{ evento?.titolo }}</template>
  </LandingSectionhead>
  <LandingBreadcrumb :voci="breadcrumb" />

  <div v-if="evento" class="my-4">
    <UiEvent
      :event="{
        date: evento?.data,
        title: evento?.titolo,
        image: useEventoImg(evento),
        description: evento?.descrizionex,
        location: evento?.location,
        city: evento?.city,
      }"
    />
  </div>
  <EventiNostr v-if="evento?.nostr_id" :nostr_id="evento?.nostr_id" />
  <EventiNip52kind31923 v-if="evento?.kind31923" :kind31923="evento?.kind31923" />
  <MeetupBadge v-if="evento?.id_comunita" :idcomunita="evento?.id_comunita" />

  <EventiVenue v-if="evento?.id_nod_osm" :idnodosm="evento?.id_nod_osm" />
  <EventiVenueway v-if="evento?.id_way_osm" :idwayosm="evento?.id_way_osm" />
</template>

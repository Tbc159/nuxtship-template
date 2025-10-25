<script setup>
const props = defineProps(["data"]);

const breadcrumb = computed(() => [
  {
    label: "comunità",
    path: "/comunita",
  },
  {
    label: props.data?.localita,
    path: props.data?.idlocalita ? "/l/" + props.data?.idlocalita : null,
  },
  {
    label: props.data?.network,
    path: props.data?.network ? "/meetup/" + props?.data?.network : null,
  },
]);

useHead({
  title: props?.data?.name + " | Bitcoin Italia Network",
  link: [
    {
      rel: "canonical",
      href: `https://bitcoinitalianetwork.com/c/${props?.data?.id}`,
    },
  ],
  meta: [
    {
      property: "og:image",
      content:
        "https://bitcoinitalianetwork.com/img/c/" + props?.data?.id + ".jpeg",
    },
  ],
});
</script>

<template>
  <LandingSectionhead>
    <template v-slot:title>{{ data?.localita }}</template>
    <template v-slot:desc>{{ data?.name }}</template>
  </LandingSectionhead>

  <div class="grid place-items-center pt-4">
    <!--
    <NuxtImg
      :src="`/img/l/${data.idlocalita}.jpg`"
      class="aspect-square max-h-96 rounded-xl z-10"
    />
    -->
    <NuxtImg
      :src="`/img/c/${data?.id}.jpeg`"
      format="webp"
      class="aspect-square max-h-48 rounded-full"
    />
  </div>

  <LandingBreadcrumb :voci="breadcrumb" />

  <div class="py-4 container mx-auto border-2 rounded-lg shadow sm:px-10">
    <div class="divide-y divide-gray-300/50">
      <div class="flex">
        <div v-if="data?.telegram_app" class="flex flex-row align-items-center px-8 py-2">
          <Icon name="logos:telegram" size="24" class="mr-2" />
          <span>Telegram</span>
        </div>
        <div
          v-if="data?.telegram_members"
          class="flex flex-row align-items-center px-8 py-2"
        >
          <span class="text-gray-400">members: </span
          >{{ data?.telegram_members }}
        </div>
      </div>
      <div class="py-2 px-8">
        <div class="flex gap-4">
          <div v-if="data?.telegram_app">
            <ComunitaButton
              :href="data?.telegram_app"
              :icona="'fa6-solid:mobile-screen'"
              :testo="'app'"
            />
          </div>
          <div v-if="data?.telegram_weburl">
            <ComunitaButton
              :href="data?.telegram_weburl"
              :icona="'mdi:web'"
              :testo="'web'"
            />
          </div>
          <div v-if="data?.facebook">
            <ComunitaButton
              :href="data.facebook"
              :icona="'mdi:facebook'"
              testo="facebook"
            />
          </div>
        </div>
      </div>
    </div>
  </div>

  <ComunitaEventi :idcomunita="data?.id" />

  <div class="py-8">
    <LMap
      style="height: 250px"
      :zoom="11"
      :center="[data?.lng, data?.lat]"
      :use-global-leaflet="false"
    >
      <MainLTileLayer />
      <ComunitaPoimarker v-for="poi of data.poi" :poi="poi" />
    </LMap>
  </div>

  <OnwListapoi :datapois="data.poi" />
  <LandingDisclaimer />
</template>

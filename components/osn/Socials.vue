<script>
const social = [
  {
    nome: "instagram",
    icona: "mdi:instagram",
  },
  {
    nome: "facebook",
    icona: "mdi:facebook",
  },
  {
    nome: "twitter",
    icona: "bi:twitter-x",
  },
  {
    nome: "linkedin",
    icona: "mdi:linkedin",
  },
  {
    nome: "telegram",
    icona: "mdi:telegram",
  },
  {
    nome: "pinterest",
    icona: "mdi:pinterest",
  },
  {
    nome: "youtube",
    icona: "mdi:youtube",
  },
  {
    nome: "whatsapp",
    icona: "mdi:whatsapp",
  },
  {
    nome: "tiktok",
    icona: "ic:baseline-tiktok",
  },
  {
    nome: "skype",
    icona: "mdi:skype",
  },
  {
    nome: "foursquare",
    icona: "mdi:foursquare",
  },
  {
    nome: "yelp",
    icona: "mdi:yelp",
  },
  {
    nome: "tripadvisor",
    icona: "tabler:brand-tripadvisor",
  }
];

export default {
  props: {
    tags: {
      type: Object,
    },
    dbdata: {
      type: Object,
    },
    pending: {
      type: Object,
    },
  },
  data() {
    return {
      social: social,
    };
  },
};
</script>
<template>
  <div class="flex flex-wrap my-4">
    <span v-for="s of social">
      <OsnSocial
        :nome="s.nome"
        :icona="s.icona"
        :value="tags['contact:' + s.nome]"
      />
    </span>
    <OsnTripadvisor :pending="pending" :dbdata="dbdata" />
  </div>
</template>

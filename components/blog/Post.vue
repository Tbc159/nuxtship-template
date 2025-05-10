<script setup>
const props = defineProps(["post"]);

const breadcrumb = computed(() => [
  {
    label: "blog",
    path: "/blog",
  },
  {
    label: props.post.titolo,
  },
]);

useHead({
  title: props?.post?.titolo + " | Bitcoin Italia Network",
  link: [
    {
      rel: "canonical",
      href: `https://bitcoinitalianetwork.com/b/${props?.post?.slug}`,
    },
  ],
});
</script>

<template>
  <LandingSectionhead>
    <template v-slot:title>{{ post?.titolo }}</template>
  </LandingSectionhead>
  <LandingBreadcrumb :voci="breadcrumb" />

    <div v-html="post.corpo" class="mt-3"></div>
</template>

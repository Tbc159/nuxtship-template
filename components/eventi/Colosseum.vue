<script setup>
const eventoBitcoinColosseum = {
  id: "hi3jujkkctwyexa",
  titolo: "Bitcoin Colosseum",
  city: "Roma",
  data: "2026-05-25 15:00:00",
  imgurl: "https://images2.imgbox.com/84/33/snrMUuNe_o.png",
};
</script>
<template>
  <div class="py-4">
    <EventiCard :evento="eventoBitcoinColosseum" class="my-8" />
  </div>
</template>
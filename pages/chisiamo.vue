<script setup>
definePageMeta({
  layout: "landing",
});

const TeamImg1 = "/_nuxt/assets/img/alessandro.jpg";
const TeamImg2 = "/_nuxt/assets/img/carlo.jpg";
const TeamImg3 = "/_nuxt/assets/img/max.jpg";

const team = [
  {
    name: "Alessandro",
    title: "Chief Disruption Officer",
    avatar: {
      src: TeamImg1,
      width: 480,
      height: 560,
    },
  },
  {
    name: "Carlo",
    title: "Chief Empathy Officer",
    avatar: {
      src: TeamImg2,
      width: 580,
      height: 580,
    },
  },
  {
    name: "Max",
    title: "Marketing Engineer",
    avatar: {
      src: TeamImg3,
      width: 580,
      height: 580,
    },
  },
];
</script>

<template>
  <LandingContainer>
    <LandingSectionhead>
      <template v-slot:title>Chi siamo</template>
      <template v-slot:desc>Un team di appassionati.</template>
    </LandingSectionhead>

    <div class="flex flex-col gap-3 mx-auto max-w-4xl mt-16">
      <h2 class="font-bold text-3xl text-gray-800">
        BIN Bitcoin Italia Network.
      </h2>
      <p class="text-lg leading-relaxed text-slate-500">
        Siamo un team multiculturale europeo 
        proveniente da diverse parti d'Italia,
        Proveniamo da contesti diversi, portando personalità, esperienze e competenze uniche nel nostro lavoro.
        È questo che rende il nostro team così speciale.
      </p>
    </div>
    <div class="grid md:grid-cols-3 gap-10 mx-auto max-w-4xl mt-12">
      <div v-for="item of team" class="group">
        <div class="w-full aspect-square">
          <img
            :src="item.avatar.src"
            :width="item.avatar.width"
            :height="item.avatar.height"
            format="avif"
            alt="Team"
            class="w-full h-full object-cover rounded transition group-hover:-translate-y-1 group-hover:shadow-xl"
          />
        </div>

        <div class="mt-4 text-center">
          <h2 class="text-lg text-gray-800">{{ item.name }}</h2>
          <h3 class="text-sm text-slate-500">{{ item.title }}</h3>
        </div>
      </div>
      <!-- {
        team.map((item) => (
          <div class="group">
            <div class="w-full aspect-square">
              <Image
                {...item.avatar}
                format="avif"
                alt="Team"
                class="w-full h-full object-cover rounded transition  group-hover:-translate-y-1 group-hover:shadow-xl"
              />
            </div>

            <div class="mt-4 text-center">
              <h2 class="text-lg text-gray-800"> {item.name}</h2>
              <h3 class="text-sm text-slate-500"> {item.title}</h3>
            </div>
          </div>
        ))
      } -->
    </div>
  </LandingContainer>
</template>

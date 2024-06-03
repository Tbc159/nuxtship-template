<script setup>
definePageMeta({
  layout: "landing",
});

const mappe = [
  {
    nome: "Coinmap it",
    url: "https://coinmap.it/",
  },
  {
	  nome: "Coinmap org",
	  url: "https://coinmap.org/view/",
	},
	{
		nome: "BTC Map",
		url: "https://btcmap.org/map",
	},
	{
		nome: "Map Bitcoin.com",
		url: "https://map.bitcoin.com/",
	},
	{
	  nome: "Qui Bitcoin",
	  url: "https://www.quibitcoin.it",
	},
];
</script>

<template>
	<LandingContainer>
		<LandingSectionhead>
			<template v-slot:title>Dove</template>
			<template v-slot:desc>Attività che accettano Bitcoin.</template>
		</LandingSectionhead>
		<div class="flex flex-col gap-3 mx-auto max-w-4xl mt-16">
			<div class="mx-auto max-w-md">

				<ul class="space-y-4">
					<li v-for="mappa of mappe" class="flex items-center">
						<svg class="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
							<circle cx="12" cy="12" r="11" />
							<path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
						</svg>
						<p class="ml-4">
							<a
							:href="mappa.url"
							class="flex lg:px-3 py-2 text-gray-600 hover:text-gray-900"
							target="_blank"
							>
							{{ mappa.nome }}
							</a>
						</p>
				</li>
				</ul>
			</div>
		</div>
</LandingContainer>
</template>

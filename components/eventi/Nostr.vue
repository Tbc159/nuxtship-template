<script>
export default {
  props: {
    nostr_id: {
      required: true,
    },
  },
};
</script>
<template>
	<div>
		<NuxtLink :to="`https://nostr.com/${nostr_id}`" target="_blank">
			<button class="btn btn-primary pt-4 pb-10">
				<Icon name="game-icons:ostrich" size="28" />
				<span class="whitespace-normal break-words">Chatta su Nostr</span>
			</button>
		</NuxtLink>
	</div>
</template>

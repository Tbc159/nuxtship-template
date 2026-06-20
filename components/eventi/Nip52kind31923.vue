<script>
export default {
  props: {
    kind31923: {
      required: true,
    },
  },
};
</script>
<template>
	<div class="flex flex-row gap-2">
		<NuxtLink :to="`https://plektos.app/event/${kind31923}`" target="_blank">
			<button class="btn btn-primary py-4 m-2">
				<span>plektos</span>
			</button>
		</NuxtLink>
		<NuxtLink :to="`https://njump.me/${kind31923}`" target="_blank">
			<button class="btn btn-primary py-4 m-2">
				<span>njump</span>
			</button>
		</NuxtLink>
		<NuxtLink :to="`https://nostr.com/${kind31923}`" target="_blank">
			<button class="btn btn-primary py-4 m-2">
				<span>nostr.com</span>
			</button>
		</NuxtLink>
		<NuxtLink :to="`https://meetstr.com/event/${kind31923}`" target="_blank">
			<button class="btn btn-primary py-4 m-2">
				<span>meetstr</span>
			</button>
		</NuxtLink>
	</div>
</template>

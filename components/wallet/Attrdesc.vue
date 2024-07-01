<script>
export default {
  props: {
    att: {
      required: true,
    },
  },
};
</script>

<template>
  <div class="flex flex-row gap-4">
	<div class="w-4">

	</div>
	<WalletAttrdsub :att="att" />
  </div>
</template>

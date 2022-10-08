<script setup>
defineProps({
	msg: {
		type: String,
		required: true,
	},
})
</script>

<template>
	<div class="text-center mb-4">
		<h1 class="font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
			{{ msg }}
		</h1>
		<h3 class="text-xl font-thin md:text-2xl lg:text-3xl xl:text-4xl">
			Redeem your Hotelgift voucher for your next hotel stay.
		</h3>
	</div>
</template>

<style scoped>
h1 {
	top: -10px;
}
</style>

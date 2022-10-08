<script setup>
import { onMounted } from "vue"
import { useStore } from "vuex"
import HelloWorld from "./components/HelloWorld.vue"
import Form from "./components/Form.vue"

const store = useStore()

onMounted(() => {
	store.dispatch("fetchDestinations")
})
</script>

<template>
	<div
		class="font-ubuntu text-grey-500 grid grid-cols-2 justify-center align-center h-full"
	>
		<header>
			<div class="wrapper">
				<HelloWorld msg="Autocomplete with Vue & TailwindCSS" />
			</div>
		</header>

		<main class="col-span-1">
			<Form />
		</main>
	</div>
</template>

<style scoped>
header {
	line-height: 1.5;
}

@media (min-width: 1024px) {
	header {
		display: flex;
		place-items: center;
		padding-right: calc(var(--section-gap) / 2);
	}

	.logo {
		margin: 0 2rem 0 0;
	}

	header .wrapper {
		display: flex;
		place-items: flex-start;
		flex-wrap: wrap;
	}
}
</style>

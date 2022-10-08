<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { computed } from "vue"
import Autocomplete from "./Autocomplete.vue"
import { useStore } from "vuex"
const store = useStore()

const handleChosen = (item) => {
	console.log(item)
}

const destinationList = computed(() => store.getters["loadDestinations"])
</script>

<template>
	<div class="flex justify-center">
		<div class="sm:max-w-sm flex-1 h-24 rounded-md shadow-lg bg-white">
			<div class="px-6 py-4 h-full">
				<Autocomplete
					:data-list="destinationList"
					@chosen="handleChosen($event)"
				/>
			</div>
		</div>
	</div>
</template>

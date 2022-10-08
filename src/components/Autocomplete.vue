<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref } from "vue"

// Props
const props = defineProps({
	selection: {
		type: String,
		required: false,
	},
	placeholder: {
		type: String,
		required: false,
		default: "Destination",
	},
	dataList: {
		type: Array,
		required: true,
	},
	// inputClass: {
	// 	type: String,
	// 	required: false,
	// 	default:
	// 		"border border-gray-300 py-2 px-3 rounded-md focus:outline-none focus:shadow-outline",
	// },
	// dropdownClass: {
	// 	type: String,
	// 	required: false,
	// 	default:
	// 		"absolute w-full z-50 bg-white border border-gray-300 mt-1 mh-48 overflow-hidden overflow-y-scroll rounded-md shadow-md",
	// },
})

// Data

let searchTerm = ref("")
let selectedItem = ref("")
let filteredList = ref([])
let showOptions = ref(false)

// Emits
const emit = defineEmits(["chosen", "input"])

// Methods
const onInput = (e) => {
	if (e.target.value === "") {
		showOptions.value = false
		return
	}
	showOptions.value = true
	filterItems()
}

const filterItems = () => {
	filteredList.value = props.dataList.filter((item) => {
		return item.title.toLowerCase().startsWith(searchTerm.value.toLowerCase())
	})
}
const handleChosen = (item) => {
	selectedItem.value = item
	searchTerm.value = item.title
	showOptions.value = false
	emit("chosen", item)
}

const clickedOutside = () => {
	showOptions.value = false
}

const reset = () => {
	searchTerm.value = ""
	selectedItem.value = ""
	showOptions.value = false
}

const getNextOption = (index) => {
	console.log("getNextOption", index)
}

//Directives
const vClickOutside = {
	mounted(el, binding) {
		el.clickOutsideEvent = function (event) {
			if (!(el === event.target || el.contains(event.target))) {
				binding.value(event, el)
			}
		}
		document.body.addEventListener("click", el.clickOutsideEvent)
	},
	unmounted(el) {
		document.body.removeEventListener("click", el.clickOutsideEvent)
	},
}
</script>

<template>
	<div
		class="c-autocomplete rounded-md"
		v-click-outside="() => clickedOutside()"
	>
		<div
			class="input-container w-full flex focus:border-dark-blue-500 border rounded-md p-3"
		>
			<span class="flex items-center mr-3">
				📕
			</span>

			<input
				style="outline: none; border: none"
				type="text"
				class="flex-1 text-sky-900 focus:ring-transparent"
				autocomplete="off"
				placeholder="Destination"
				v-model="searchTerm"
				@keydown.down="getNextOption(idx)"
				@input="onInput($event)"
			/>
			<span
				v-if="searchTerm.length"
				class="flex items-center cursor-pointer"
				@click="reset()"
			>
				<img src="@/assets/icons/x_icon.svg" alt="" />
			</span>
		</div>
		<Transition name="slide" mode="in-out">
			<div
				v-if="showOptions"
				class="suggestions h-32 bg-white px-3 overflow-hidden relative z-50 rounded-md"
			>
				<ul
					v-if="filteredList.length"
					class="mt-3 -ml-3 h-full absolute w-full overflow-y-scroll p-1"
				>
					<li
						v-for="(item, idx) in filteredList"
						:key="idx"
						@click="handleChosen(item)"
						class="cursor-pointer flex no-wrap hover:bg-gray-100 py-3 px-6"
					>
						<!-- <span class="place" v-if="item.type === 'country'">
							<img src="../assets/icons/icon-country.svg" />
						</span>
						<span class="place" v-if="item.type === 'destination'">
							<img src="../assets/icons/icon-destination.svg" />
						</span>
						<span class="place" v-if="item.type === 'city'">
							<img src="../assets/icons/icon-city.svg" />
						</span> -->
						<span class="px-3 text-blue-dark-500 capitalize">{{ item.title }}</span>
					</li>
				</ul>
				<div v-else class="text-gray-400 w-full text-center">
					<h4 class="mt-6 text-lg">Sorry, no matches!</h4>
					<p class="text-sm">Please, try again</p>
				</div>
			</div>
		</Transition>
	</div>
</template>

<style scoped>
.suggestions {
	border-bottom: 1rem solid transparent;
}
.place {
	display: flex;
	align-items: center;
	width: 25px;
}

.slide-enter-active,
.slide-leave-active {
	transition: all 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
	opacity: 0;
	margin-top: 10px;
	z-index: 0;
	transform: translateY(-30px);
}
</style>

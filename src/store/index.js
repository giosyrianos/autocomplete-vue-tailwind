import { createStore } from "vuex"
import destinationsDataService from "../services/destinationsDataService"

const store = createStore({
	state() {
		return {
			destinations: [],
		}
	},

	actions: {
		fetchDestinations({ commit }) {
			destinationsDataService.getAllDestinations().then((response) => {
				console.log(response)
				const types = response.data.map((destination) => destination.type)
				const uniqueTypes = [...new Set(types)]
				console.log(uniqueTypes)
				commit("SET_DESTINATIONS", response.data)
			}).catch((e) => {
				console.log(e)
			})
		},
	},

	mutations: {
		SET_DESTINATIONS(state, destinations) {
			state.destinations = destinations
		},
	},

	getters: {
		loadDestinations: (state) => state.destinations,
	},
})

export default store

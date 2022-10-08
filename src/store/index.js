import { createStore } from "vuex"

const store = createStore({
	state() {
		return {
			posts: [],
		}
	},

	actions: {
		async fetchPosts({ commit }) {
			const response = await fetch("https://jsonplaceholder.typicode.com/posts")
			const data = await response.json()
			console.log(data)
			commit("SET_POSTS", data)
		},
	},

	mutations: {
		SET_POSTS(state, posts) {
			state.posts = posts
		},
	},

	getters: {
		loadPosts: (state) => state.posts,
	},
})

export default store

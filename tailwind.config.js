/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
	],
  theme: {
		extend: {
			colors: {
				"vue-green": "#00bd7e",
				"dark-blue": "#09203f",
			}
		},
  },
  plugins: [],
}

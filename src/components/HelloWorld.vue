<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="greetings">
    <h1 class="text-vue-green font-medium text-3xl md:text-4xl lg:text-5xl xl:text-6xl">{{ msg }}</h1>
    <h3 class="text-sky-500 text-xl md:text-2xl lg:text-3xl xl:text-4xl">
      A simple input with autocomplete functionality.
      <a href="https://vitejs.dev/" target="_blank"  rel="noopener" class="font-bold">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener" class="font-bold">Vue 3</a>.
    </h3>
  </div>
</template>

<style scoped>
h1 {
  /* font-weight: 500; */
  /* font-size: 2.6rem; */
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>

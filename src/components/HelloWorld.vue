<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++" class="px-4 py-2 mb-5 text-sm bg-[#1a1a1a] text-white rounded-2 shadow-sm">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>

    <p class="mt-5">Have fun to use 😃</p>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>

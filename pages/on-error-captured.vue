<script setup lang="ts">
// import { onErrorCaptured } from 'vue'

const message = ref('')

onErrorCaptured((err) => {
  message.value = err.message
  return false
})
</script>

<template>
  <div>
    <h1 class="m-2 text-3xl">onErrorCaptured</h1>
    <ErrorButton />
    <p v-if="message.length > 0">Error:{{ message }}</p>
  </div>
</template>

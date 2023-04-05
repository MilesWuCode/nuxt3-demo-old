<script setup lang="ts">
defineProps<{
  error: {
    statusCode: number
    message: string
  }
}>()

// 使用useError
// const error = useError()
// if (error.value.statusCode === 404) {
//   error.value.message = 'Oops! Page not found 😔'
// }
</script>

<template>
  <h1 class="m-2 text-3xl">{{ error.statusCode }}</h1>
  <p>{{ error.message }}</p>
  <button @click="() => clearError({ redirect: '/' })">Back</button>
</template>

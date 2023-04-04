<script setup lang="ts">
defineProps<{
  error: {
    statusCode: number
    message: string
  }
}>()
</script>

<template>
  <h1 class="m-2 text-3xl">{{ error.statusCode }}</h1>
  <p>{{ error.message }}</p>
</template>

<script setup lang="ts">
type Props = {
  error: {
    statusCode: number
    message: string
  }
}

const props = defineProps<Props>()
</script>

<template>
  <h1 class="m-2 text-3xl">{{ props.error.statusCode }}</h1>
  <p>{{ props.error.message }}</p>
</template>

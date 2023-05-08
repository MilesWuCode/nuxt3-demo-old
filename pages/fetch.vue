<script setup lang="ts">
const { data } = await useFetch('/api/count')
</script>

<template>
  <div>Page visits: {{ data }}</div>
</template>

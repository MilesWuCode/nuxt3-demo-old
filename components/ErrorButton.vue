<script setup lang="ts">
const onError = () => {
  throw new Error('發生錯誤')
}
</script>

<template>
  <button type="button" @click="onError">按了會噴錯</button>
</template>

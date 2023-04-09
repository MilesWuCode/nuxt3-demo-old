<script setup lang="ts">
definePageMeta({
  // 設定layout
  layout: 'default',
  // 禁用layout
  // layout: false,
})
</script>

<template>
  <div>
    <h1 class="m-2 text-3xl">todo</h1>
    <TodoList class="mx-auto max-w-sm" />
  </div>
</template>

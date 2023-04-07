<script setup lang="ts">
import { useTodoStore } from '@/stores/todo'

const store = useTodoStore()
</script>

<template>
  <span>{{ store.completedTotal }} / {{ store.total }}</span>
  <ul class="menu hidden w-56 md:block">
    <li v-for="item of store.list" :key="item.id">
      {{ item.content }}
    </li>
  </ul>
</template>

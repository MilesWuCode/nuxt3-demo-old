<script setup lang="ts">
import { useTodoStore } from '@/stores/todo'

const store = useTodoStore()
</script>

<template>
  <div class="flex flex-col space-y-2">
    <!-- input -->
    <div class="form-control">
      <div class="input-group">
        <input
          type="text"
          placeholder="Search…"
          class="input-bordered input w-full"
        />
        <button class="btn-square btn">add</button>
      </div>
    </div>

    <!-- filter -->
    <div class="tabs justify-around">
      <span class="tab">{{ store.completedTotal }} / {{ store.total }}</span>
      <button class="tab tab-active">All</button>
      <button class="tab">Active</button>
      <button class="tab">Completed</button>
    </div>

    <!-- list -->
    <ul class="menu">
      <li v-for="item of store.list" :key="item.id" class="p-3">
        <label class="label justify-start">
          <input type="checkbox" class="checkbox" />
          <span class="label-text">Remember me</span>
        </label>
      </li>
    </ul>
  </div>
</template>

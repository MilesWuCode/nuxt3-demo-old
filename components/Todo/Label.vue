<script setup lang="ts">
import type { Todo } from '@/stores/todo'

const props = defineProps<{
  todo: Todo
}>()

const emit = defineEmits<{
  (e: 'changeState', id: number, state: Todo['state']): void
  (e: 'removeTodo', id: number): void
}>()

const state = ref(props.todo.state)

const onChange = () => {
  emit('changeState', props.todo.id, state.value)
}

const onRemove = () => {
  emit('removeTodo', props.todo.id)
}
</script>

<template>
  <label class="label justify-start">
    <input
      v-model="state"
      true-value="completed"
      false-value="active"
      type="checkbox"
      class="checkbox flex-none"
      @change="onChange"
    />
    <span
      class="label-text grow"
      :class="state === 'completed' && 'line-through'"
      >{{ todo.content }}</span
    >
    <button class="btn-sm btn flex-none" @click="onRemove">Del</button>
  </label>
</template>

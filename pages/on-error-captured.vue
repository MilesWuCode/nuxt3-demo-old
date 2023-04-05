<script setup lang="ts">
// import { onErrorCaptured } from 'vue'

const message = ref('')

onErrorCaptured((err) => {
  message.value = err.message

  return false

  // 或

  // 錯誤換頁到400
  // throw createError({
  //   statusCode: 400,
  //   statusMessage: 'Bad Request',
  //   fatal: true,
  // })
})

const errorLog = (err: Error) => {
  console.log('1', err)
}
</script>

<template>
  <div>
    <h1 class="m-2 text-3xl">onErrorCaptured</h1>
    <div class="flex flex-col space-y-4">
      <div>
        <p>Case 1 onErrorCaptured</p>

        <ErrorButton />

        <p v-if="message.length > 0">Error:{{ message }}</p>
      </div>

      <div>
        <p>Case 2 NuxtErrorBoundary / clearError</p>

        <NuxtErrorBoundary @error="errorLog">
          <ErrorButton />
          <!-- You use the default slot to render your content -->
          <template #error="{ error }">
            You can display the error locally here.
            {{ error }}
            <button @click="() => clearError()">Clear</button>
          </template>
        </NuxtErrorBoundary>
      </div>
    </div>
  </div>
</template>

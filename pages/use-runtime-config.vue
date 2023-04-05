<script setup lang="ts">
const config = useRuntimeConfig()

console.log('Runtime config:', config)

const cnf = useState('config', () => config)

if (process.server) {
  console.log('API secret:', config.apiSecret)
}
</script>

<template>
  <div>
    <h1 class="m-2 text-3xl">useRuntimeConfig</h1>
    <div class="flex flex-col space-y-4">
      <div>
        <p>CSR</p>
        <span>
          config:
          <pre>{{ cnf }}</pre>
        </span>
      </div>

      <div>
        <p>SSR進入頁面時有值 / SPA換頁時無值</p>
        <p>
          config.apiSecret:
          <span>
            {{ config.apiSecret }}
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

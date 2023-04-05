<script setup lang="ts">
type Link = {
  name: string
  href: string
}

const menu: Link[] = [
  { name: 'index', href: '/' },
  { name: 'tailwindcss', href: '/tailwindcss' },
  { name: 'headlessui', href: '/headlessui' },
  { name: 'useRuntimeConfig', href: '/use-runtime-config' },
]
</script>

<template>
  <ul class="menu hidden w-56 md:block">
    <li v-for="item of menu" :key="item.href">
      <NuxtLink :to="item.href">{{ item.name }}</NuxtLink>
    </li>
  </ul>
</template>

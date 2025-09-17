<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';

</script>

<template>
  <nav class="p-4 bg-blue-100 h-[var(--navbar-height)] flex items-center gap-4">
    <RouterLink to="/demo-list">
      <span class="text-blue-800 underline-offset-4" :class="{ underline: $route.path === '/demo-list' }">列表页</span>
    </RouterLink>
    <RouterLink to="/demo-list-detail">
      <span class="text-blue-800 underline-offset-4" :class="{ underline: $route.path === '/demo-list-detail' }">详情</span>
    </RouterLink>
  </nav>
  <main class="p-4 bg-gray-50 min-h-[calc(100vh-var(--navbar-height))]">
    <RouterView></RouterView>
  </main>
</template>
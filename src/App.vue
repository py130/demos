<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import { ref } from 'vue';

const paths = ref([
  '/demos/demo-list',
  '/demos/demo-list-detail',
])


</script>

<template>
  <nav class="p-4 bg-blue-100 h-[var(--navbar-height)] flex items-center gap-4">
    <RouterLink :to="paths[0]">
      <span class="text-blue-800 underline-offset-4" :class="{ underline: $route.path === paths[0] }">列表页</span>
    </RouterLink>
    <RouterLink :to="paths[1]">
      <span class="text-blue-800 underline-offset-4" :class="{ underline: $route.path === paths[1] }">详情</span>
    </RouterLink>
  </nav>
  <main class="p-4 bg-gray-50 min-h-[calc(100vh-var(--navbar-height))]">
    <RouterView></RouterView>
  </main>
</template>
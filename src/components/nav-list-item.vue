<script setup lang="ts">
defineProps({
  navPath: {
    type: String,
    default: ''
  },
  navLabel: {
    type: String,
    default: ''
  }
})
</script>
<template>
  <RouterLink :to="navPath">
    <span
      class="text-orange-800 underline-offset-4"
      :class="{ underline: $route.path === navPath }"
    >
      {{ navLabel }}
    </span>
  </RouterLink>
</template>
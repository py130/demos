<script setup lang="ts">
import NavListItem from './nav-list-item.vue'

const navList = [
  {
    navPath: '/demos/demo-list',
    navLabel: '首页'
  },
  // {
  //   navPath: '/demos/demo-list-detail',
  //   navLabel: '详情页'
  // },
]
</script>
<template>
  <nav class="system-nav px-4 bg-orange-100 h-[var(--navbar-height)] flex items-center gap-4 ">
    <NavListItem
      v-for="({ navPath, navLabel }) in navList"
      :navPath="navPath"
      :navLabel="navLabel"
    ></NavListItem>
  </nav>
</template>
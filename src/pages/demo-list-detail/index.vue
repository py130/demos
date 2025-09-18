<script setup lang="ts">
import { useRoute } from 'vue-router';
import DemoVirtualList from './components/demo-virtual-list.vue'
import { NSwitch, NDatePicker, NTable } from 'naive-ui'
import { ref } from 'vue';

const route = useRoute()
const { title, componentName } = route.query

const isShowCode = ref(false)

const componentMap = {
  DemoVirtualList
}
type ComponentMapKey = keyof typeof componentMap
const CurrentComponent = componentMap[componentName as ComponentMapKey]
</script>
<template>
  <h2 class="font-bold">{{ title }}</h2>
  <div>
    <n-switch v-model:value="isShowCode" size="large" style="font-size: var(--naive-rem);">
      <template #checked>
        open
      </template>
      <template #unchecked>
        close
      </template>
    </n-switch>
  </div>
  <component :is="CurrentComponent"></component>
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router';
import DemoVirtualList from './components/demo-virtual-list.vue';
import { NSwitch, NConfigProvider } from 'naive-ui';
import { ref } from 'vue';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';

hljs.registerLanguage('javascript', javascript)

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
  <h2 class="demo-header font-bold py-2">
    {{ title }}
    <n-switch v-model:value="isShowCode" size="large" style="font-size: var(--naive-rem);" :round="false">
      <template #checked>
        code
      </template>
      <template #unchecked>
        demo
      </template>
    </n-switch>
  </h2>
  <n-config-provider :hljs="hljs">
    <component :is="CurrentComponent" :isShowCode="isShowCode"></component>
  </n-config-provider>
  
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import BeginSvg from '../../assets/begin.svg'

interface DemoItem {
  title: string
  componentName: string
}

const demoList = ref<DemoItem[]>([
  {
    title: '虚拟列表（demo-virtual-list）',
    componentName: 'DemoVirtualList',
  },
  {
    title: '测试demo2',
    componentName: 'TestDemo2',
  },
])

const router = useRouter() 
const onClickView = ({ title, componentName }: DemoItem) => {
  router.push({
    path: '/demos/demo-list-detail',
    query: { title, componentName }
  })
}
</script>
<template>
  <ul>
    <li
      v-for="(item, index) in demoList"
      class="group flex gap-2 cursor-pointer mb-2 transition-all duration-100 hover:rounded hover:border-solid hover:border-2 hover:border-orange-800 active:bg-orange-100 p-2"
      @click="() => onClickView(item)"
    >
      {{ index + 1 }}、{{ item.title }}<img class="w-4" :src="BeginSvg"></img>
    </li>
  </ul>
</template>
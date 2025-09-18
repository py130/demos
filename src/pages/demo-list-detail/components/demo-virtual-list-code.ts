export default `
<script setup lang="ts">
import { nextTick, ref, watchEffect } from 'vue';
import code from './demo-virtual-list-code.ts'
import { NCode } from 'naive-ui'

const props = defineProps({
  isShowCode: {
    type: Boolean,
    default: false
  }
})

interface listItem {
  id: number
  value: string
  show: boolean
}
const listData = ref<listItem[]>([])
let isInitial = true

const initListData = () => {
  for(let i = 0; i < 1000; i++) {
    listData.value.push({
      id: i,
      value: '随机长度字符'.repeat(Math.ceil((Math.random() * 30))),
      show: false,
    })
  }
}
const initObserver = async () => {
  isInitial = false
  await nextTick()
  const options = {
    root: document.querySelector('.virtual-list-container'),
    rootMargin: '500px 0px'
  }
  const rowList = document.querySelectorAll('.virtual-list-item')
  const callback = (entries: IntersectionObserverEntry[]) => {
    let _entries = entries
    if (_entries.length === listData.value.length) {
      _entries = _entries.reduce((pre, cur, index) => {
        if (cur.isIntersecting) {
          pre.push(cur)
        } else {
          _entries.splice(index)
        }
        return pre
      }, [] as IntersectionObserverEntry[])
    }
    _entries.forEach(entry => {
      const target = entry.target as HTMLElement
      const index = Number(target.dataset.index)
      if (!entry.isIntersecting) {
        if (!isInitial) {
          target.style.height = \`\${target.clientHeight}px\`
          listData.value[index].show = false
        }
      } else {
        target.style.height = ''
        listData.value[index].show = true
      }
    })
  }
  const observer = new IntersectionObserver(callback, options)
  rowList.forEach(row => {
    observer.observe(row)
  })
  isInitial = false
}

watchEffect(() => {
  if (!props.isShowCode) {
    initListData()
    initObserver()
  }
})

</script>

<template>
  <div class="virtual-list-container max-h-[50vh] overflow-y-auto" v-if="!isShowCode">
    <div v-for="item, index in listData" :key="index" class="">
      <div class="virtual-list-item border-solid border-2 border-black mb-4 min-h-[40px]" :data-index="index">
        <div v-if="item.show">{{ item.value }}</div>
      </div>
    </div>
  </div>
  <div class="overflow-auto">
    <n-code language="javascript" :code="code"></n-code>
  </div>
</template>
`
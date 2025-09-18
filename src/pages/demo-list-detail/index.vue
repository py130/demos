<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()

</script>
<template>
  {{ route.query.componentName }}
</template>
<template>
  <h1>资源列表</h1>
</template>
<script lang="ts" setup>
  import { ref } from 'vue';

  const loading = ref(true);

  setTimeout(() => {
    loading.value = false;
  }, 1500);
</script>

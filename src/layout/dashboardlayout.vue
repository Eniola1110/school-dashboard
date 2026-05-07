<script setup>
import sidebar from '@/components/sidebar.vue';
</script>
<template>
  <div class="layouts">
     <sidebar/>
     <div class="content">
      <RouterView />
     </div>
  </div>
</template>
<style scoped>
.layouts{
  display: flex;
}
.content{
  flex: 1;
  padding: 30px;
  min-height: 100vh;
}
</style>
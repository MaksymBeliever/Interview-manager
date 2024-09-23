<script setup lang="ts">
import MainHeader from '@/components/MainHeader.vue'
</script>

<template>
  <div class="container">
    <main-header />
    <div class="content">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 1280px;
  margin: auto;
  padding: 20px;
}
</style>

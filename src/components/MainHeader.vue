<template>
  <main-menubar :model="items" class="menu">
    <template #item="{ item, props }">
      <router-link v-bind="props.action" :to="item.path" class="flex align-items-center">
        <span :class="item.icon" class="p-menuitem-icon"></span>
        <span class="ml-2">{{ item.label }}</span>
      </router-link>
    </template>
  </main-menubar>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface IMenuItem {
  label: string,
  icon: string,
  path: string
}

const items = ref<IMenuItem[]>([
  {
    label: 'Authorisation',
    icon: 'pi pi-user',
    path: '/auth'
  },
  {
    label: 'Add',
    icon: 'pi pi-plus',
    path: '/'
  },
  {
    label: 'Interviews',
    icon: 'pi pi-list',
    path: '/interviews'
  },
  {
    label: 'Statistics',
    icon: 'pi pi-chart-pie',
    path: '/statistics'
  },
]);

</script>

<style lang="scss" scoped>
  .menu {
    margin: 30px 0;
    &-exit {
      cursor: pointer;
    }
  }
</style>

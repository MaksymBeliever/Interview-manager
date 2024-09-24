<template>
  <main-menubar :model="items" class="menu">
    <template #item="{ item, props }">
      <template v-if="item.show">
        <router-link v-bind="props.action" :to="item.path" class="flex align-items-center">
          <span :class="item.icon" class="p-menuitem-icon"></span>
          <span class="ml-2">{{ item.label }}</span>
        </router-link>
      </template>
    </template>
    <template #end>
      <span
          @click="userStore.userId=''"
          v-if="userStore.userId"
          class="flex align-items-center menu-exit"
      >
        <span class="pi pi-sign-out p-menuitem-icon"></span>
         <span class="ml-2">Sign out</span>
      </span>
    </template>
  </main-menubar>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { ComputedRef } from 'vue'
import { useUserStore } from '@/stores/user'

const userStore = useUserStore();

interface IMenuItem {
  label: string,
  icon: string,
  path: string,
  show: ComputedRef<boolean>
}

const items = ref<IMenuItem[]>([
  {
    label: 'Authorization',
    icon: 'pi pi-user',
    path: '/auth',
    show: computed((): boolean => !userStore.userId)
  },
  {
    label: 'Add',
    icon: 'pi pi-plus',
    path: '/',
    show: computed((): boolean => !!userStore.userId)
  },
  {
    label: 'Interviews',
    icon: 'pi pi-list',
    path: '/interviews',
    show: computed((): boolean => !!userStore.userId)
  },
  {
    label: 'Statistics',
    icon: 'pi pi-chart-pie',
    path: '/statistics',
    show: computed((): boolean => !!userStore.userId)
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

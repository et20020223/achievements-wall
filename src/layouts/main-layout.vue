<template>
  <q-layout view="hHh lpR lFf" class="main-layout">
    <!-- <LoadingInner /> -->
    <!-- <AppHeader />
    <Sidebar /> -->
    <q-page-container class="main-content">
      <!-- <Breadcrumbs /> -->
      <q-page class="q-px-lg q-pb-lg">
        <router-view />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup>
// import LoadingInner from '@/components/loading-inner.vue';
// import AppHeader from '@/components/header.vue';
// import Sidebar from '@/components/sidebar.vue';
// import Breadcrumbs from '@/components/breadcrumbs.vue';
</script>

<style scoped>
.main-layout {
  overflow-y: auto; /* 允許垂直滾動 */
  height: 100vh; /* 確保layout有固定高度 */
  padding-left: 24px;
}

/* 響應式設計 - 手機版時不需要左側間距 */
@media (max-width: 768px) {
  .main-content {
    margin-left: 0;
  }
  .main-layout {
    padding-left: 0px;
  }
}
</style>

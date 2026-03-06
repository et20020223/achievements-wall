<template>
  <div class="q-pa-md">
    <q-btn unelevated color="green" label="前往競選活動" padding="10px 24px" class="text-weight-bold rounded-borders shadow-2" @click="goCampaign" />
    <q-btn unelevated color="blue" label="打開競選網頁編輯器" padding="10px 24px" class="text-weight-bold rounded-borders shadow-2" @click="goCampaignEditor" />
  </div>
</template>

<script setup>
// Home page
import {useRouter} from 'vue-router';

const router = useRouter();

function goCampaign() {
  router.push({path: '/campaign'});
}

function goCampaignEditor() {
  router.push({path: '/campaign-editor'});
}
</script>

<style scoped>
h1 {
  margin: 0 0 8px 0;
}
</style>

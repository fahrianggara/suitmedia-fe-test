<script setup>
import Banner from '@/components/Ideas/Banner.vue'
import Filtering from '@/components/Ideas/Filtering.vue'
import { ref, onMounted, onUnmounted } from 'vue'

const perPage = ref(10)
const sortBy = ref('newest')
</script>

<template>
  <Banner />

  <div class="wrapper z-10">
    <div class="container pt-12 py-6">
      <Filtering v-model:perPage="perPage" v-model:sortBy="sortBy" />
    </div>
  </div>
</template>

<style scoped></style>
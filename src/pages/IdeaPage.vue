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

      <div class="grid lg:grid-cols-4 md:grid-cols-3 hpmd:grid-cols-2 grid-cols-1 gap-6 mt-8">
        <div class="bg-white rounded-lg shadow hover:shadow-lg transition-all hover:text-primary " 
          v-for="i in 10" :key="i">
          <img src="https://placehold.co/600x400?text=Idea" alt="Idea 1"
            class="w-full h-40 object-cover rounded-t-lg">

          <div class="p-4">
            <time class="text-gray-500 text-[14px] mb-1 block uppercase">
              11 Juli 2025
            </time>
            <h2 class="text-[16px] line-clamp-3 ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo, magnam. Pariatur magnam harum
              recusandae! Cum aliquam illo qui cumque harum non dolores alias perferendis facere culpa suscipit impedit, at ducimus.
            </h2>
          </div>
        </div>
      </div>

      <!-- Pagination -->
      <div class="flex justify-center mt-8 mb-5">
        <nav class="flex items-center gap-1">
          <button class="px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-100"
            :disabled="perPage <= 1" @click="perPage--">Previous</button>
          <span class="px-4 py-2 bg-white border border-gray-300 rounded-md">1</span>
          <span class="px-4 py-2 bg-white border border-gray-300 rounded-md">2</span>
          <span class="px-4 py-2 bg-white border border-gray-300 rounded-md">5</span>
          <button class="px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-100"
            @click="perPage++">
            Next
          </button>
        </nav>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
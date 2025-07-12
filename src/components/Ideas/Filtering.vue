<script setup>
import ArrowDown from '@/components/icons/ArrowDown.vue'
import Select from '@/components/Select.vue'
import { ref, watch, defineEmits, defineProps, computed } from 'vue'

const props = defineProps({
  perPage: {
    type: Number,
    default: 10
  },
  sortBy: {
    type: String,
    default: '-published_at'
  }
})

const emit = defineEmits(['update:perPage', 'update:sortBy'])
const refPerPage = ref(props.perPage)
const refSortBy = ref(props.sortBy)

// Watch local changes and emit
watch(refPerPage, (val) => emit('update:perPage', val))
watch(refSortBy, (val) => emit('update:sortBy', val))

const sortLabel = computed(() => {
  switch (refSortBy.value) {
    case '-published_at':
      return 'Newest'
    case 'published_at':
      return 'Oldest'
    default:
      return 'Sort By'
  }
})
</script>

<template>
  <div class="flex md:flex-row flex-col justify-between md:items-center gap-4 md:gap-0">
    <slot name="pagination-info"></slot>
    
    <div class="flex flex-row hplg:gap-4 gap-2">
      <div class="flex flex-row gap-2 items-center">
        <span class="hplg:block hidden md:text-[16px] text-[15px]">Show per page: </span>

        <Select v-model="refPerPage" width="6rem">
          <template #trigger="{ value }">
            <div class="bg-white border border-gray-300 px-4 py-2 rounded-md flex justify-between items-center">
              <span>{{ value || 'Perpage' }}</span>
              <ArrowDown />
            </div>
          </template>

          <template #default="{ select }">
            <li @click="select(10)" class="cursor-pointer px-4 py-2 hover:bg-gray-100">10</li>
            <li @click="select(20)" class="cursor-pointer px-4 py-2 hover:bg-gray-100">20</li>
            <li @click="select(50)" class="cursor-pointer px-4 py-2 hover:bg-gray-100">50</li>
          </template>
        </Select>
      </div>

      <div class="flex flex-row gap-2 items-center">
        <span class="hplg:block hidden md:text-[16px] text-[15px]">Sort By: </span>

        <Select v-model="refSortBy" width="8rem">
          <template #trigger>
            <div class="bg-white border border-gray-300 px-4 py-2 rounded-md flex justify-between items-center">
              <span>{{ sortLabel }}</span>
              <ArrowDown />
            </div>
          </template>

          <template #default="{ select }">
            <li @click="select('-published_at')" class="cursor-pointer px-4 py-2 hover:bg-gray-100">Newest</li>
            <li @click="select('published_at')" class="cursor-pointer px-4 py-2 hover:bg-gray-100">Oldest</li>
          </template>
        </Select>
      </div>
    </div>
  </div>
</template>

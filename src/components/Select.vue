<script setup>
import { ref, defineEmits, defineProps, onMounted, onBeforeUnmount, nextTick } from 'vue'

const props = defineProps({
  modelValue: [String, Number, Array],
  width: {
    type: String,
    default: '16rem'
  }
})

const emit = defineEmits(['update:modelValue'])

const isOpen = ref(false)
const dropdownRef = ref(null)
const containerRef = ref(null)
const dropUp = ref(false)

const toggle = async () => {
  isOpen.value = !isOpen.value

  if (isOpen.value) {
    await nextTick()
    adjustDropdownPlacement()
  }
}

const adjustDropdownPlacement = () => {
  const dropdown = dropdownRef.value
  const container = containerRef.value
  if (!dropdown || !container) return

  const rect = container.getBoundingClientRect()
  const spaceBelow = window.innerHeight - rect.bottom
  const spaceAbove = rect.top

  // Set dropUp if there's not enough space below but enough above
  dropUp.value = spaceBelow < dropdown.offsetHeight && spaceAbove > dropdown.offsetHeight
}

const close = () => {
  isOpen.value = false
}

const select = (value) => {
  emit('update:modelValue', value)
  close()
}

const handleClickOutside = (event) => {
  if (isOpen.value && containerRef.value && !containerRef.value.contains(event.target)) {
    close()
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <div class="relative" :style="{ width: props.width }" ref="containerRef">
    <div @click="toggle" class="cursor-pointer">
      <slot name="trigger" :value="modelValue" />
    </div>

    <Transition name="fade">
      <ul v-if="isOpen" ref="dropdownRef"
        class="absolute w-full bg-white border border-gray-300 rounded-md shadow-md z-10"
        :class="dropUp ? 'bottom-full mb-1' : 'mt-1'"
      >
        <slot :select="select" />
      </ul>
    </Transition>
  </div>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>

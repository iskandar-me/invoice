<template>
  <button :class="buttonClass" v-bind="$attrs">
    <slot></slot>
  </button>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'primary' // Default to primary if no variant is provided
  }
})

const buttonClass = computed(() => {
  switch (props.variant) {
    case 'primary':
      return 'bg-[#7C5DFA] hover:bg-[#9277FF] text-white rounded-[24px] py-[6px] md:py-2 pl-[6px] md:pl-2 pr-[17px]'
    case 'secondary':
      return 'bg-gray-500 hover:bg-gray-600 text-white'
    case 'danger':
      return 'bg-red-500 hover:bg-red-600 text-white'
    case 'success':
      return 'bg-green-500 hover:bg-green-600 text-white'
    default:
      return 'bg-blue-500 hover:bg-blue-600 text-white'
  }
})
</script>

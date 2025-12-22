<template>
  <a
    :href="`tel:${phone}`"
    class="bg-orange-500 px-5 py-2 text-white text-center font-medium tracking-wider rounded-br-2xl rounded-tl-2xl hover:bg-orange-700 transition-colors duration-200 ease-linear"
  >
    <slot />
  </a>
</template>
<script setup lang="ts">
const props = defineProps<{
  phone: string;
}>();
</script>

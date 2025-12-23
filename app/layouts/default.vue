<template>
  <div class="flex flex-col gap-20 relative">
    <MobileMenu
      class="z-50"
      @closeMenu="isMenuOpen = false"
      :isMenuOpen="isMenuOpen"
    />
    <Navbar class="z-40" @openMenu="isMenuOpen = true" />
    <section class="pt-40 lg:pt-44">
      <slot />
    </section>
    <Footer />
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";

const isMenuOpen = ref(false);
</script>

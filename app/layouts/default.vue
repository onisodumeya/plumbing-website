<template>
  <div class="flex-flex-col relative">
    <MobileMenu
      class="z-50"
      @closeMenu="isMenuOpen = false"
      :isMenuOpen="isMenuOpen"
    />
    <Navbar class="z-40" @openMenu="isMenuOpen = true" />
    <section class="py-40 lg:py-44">
      <slot />
    </section>
    <Footer />
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";

const isMenuOpen = ref(false);
</script>

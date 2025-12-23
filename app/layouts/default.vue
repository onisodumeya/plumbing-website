<template>
  <div class="flex flex-col gap-20 relative">
    <MobileMenu
      class="z-[100]"
      @closeMenu="closeMenu"
      :isMenuOpen="isMenuOpen"
    />
    <Navbar
      class="z-40"
      @openMenu="isMenuOpen = true"
      @toggleMenu="toggleMenu"
    />
    <section class="pt-40 lg:pt-44">
      <slot />
    </section>
    <Footer />
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, nextTick } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = true;
};

const closeMenu = async () => {
  isMenuOpen.value = false;
  await nextTick();
};
</script>

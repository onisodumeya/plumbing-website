<template>
  <div
    class="fixed h-screen w-full bg-blue-950 text-white top-0 py-10 px-5 flex flex-col items-start gap-20 transition-transform duration-200 ease-linear"
    :class="{ '-translate-x-0': isMenuOpen, '-translate-x-full': !isMenuOpen }"
  >
    <!-- Header -->
    <div class="flex w-full justify-between">
      <h1 class="text-xl">Logo</h1>

      <!-- Close button -->
      <button @click.stop="closeMenu" class="flex items-center gap-2">
        <p class="text-xl">close</p>
        <div
          class="w-fit h-fit flex flex-col justify-center translate-y-[2px] pr-5 relative"
        >
          <div
            class="w-6 h-[2px] bg-white rotate-45 rounded-full absolute right-0"
          ></div>
          <div
            class="w-6 h-[2px] bg-white -rotate-45 rounded-full absolute right-0"
          ></div>
        </div>
      </button>
    </div>

    <!-- Nav links -->
    <div class="w-full flex flex-col gap-10 items-start text-4xl">
      <NuxtLink
        @click.stop="closeMenu"
        v-for="nav in mainNav"
        :to="nav.pageLink"
        class="w-full py-5 px-5 hover:bg-blue-900 transition-colors duration-200 ease-linear"
        :class="{
          'bg-blue-100 text-blue-900 hover:!bg-blue-100':
            currentPath === nav.pageLink,
        }"
        >{{ nav.pageTitle }}</NuxtLink
      >
    </div>
  </div>
</template>
<script setup lang="ts">
import { useNavigation } from "#imports";
import { useRoute } from "vue-router";

const props = defineProps<{
  isMenuOpen: boolean;
}>();

const emit = defineEmits(["closeMenu"]);

const { mainNav } = useNavigation();

const route = useRoute();
const currentPath = ref<string | null>(null);

onMounted(() => {
  currentPath.value = route.path;
});

watch(
  () => route.fullPath,
  (newPath, oldPath) => {
    currentPath.value = newPath;
  }
);

watch(
  () => props.isMenuOpen,
  (value) => {
    if (value === true) {
      if (import.meta.client) {
        document.body.style.overflow = "hidden";
      }
    } else {
      if (import.meta.client) {
        document.body.style.overflow = "auto";
      }
    }
  }
);

const closeMenu = () => {
  emit("closeMenu");
};
</script>

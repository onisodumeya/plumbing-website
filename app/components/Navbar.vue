<template>
  <nav class="flex flex-col fixed w-full">
    <div
      class="w-full flex-col md:flex-row bg-blue-950 py-5 md:py-10 px-5 md:px-10 flex items-center justify-between gap-5 transition-all duration-200 ease-linear relative z-10"
      :class="{ 'md:py-5': isScrolled }"
    >
      <div
        ref="navInfo"
        class="flex items-center gap-3 text-gray-300 text-xs md:text-sm"
      >
        <p>{{ email }}</p>
        <div class="h-5 w-[1px] bg-gray-300"></div>
        <p>{{ address }}</p>
      </div>
      <!-- Call button -->
      <div ref="navBtn">
        <CallBtn :phone="phone.number"> Call now {{ phone.display }} </CallBtn>
      </div>
    </div>
    <!-- Mobile Navbar -->
    <div
      ref="mobileNavbar"
      class="w-full p-5 bg-blue-50 text-white flex md:hidden justify-between items-center transition-all duration-200 ease-linear relative z-0"
      :class="{ '-translate-y-full': !isVisible }"
    >
      <p class="text-xl font-bold text-blue-950">Shay's Plumbing</p>
      <button @click.stop="handleMenuClick" class="flex flex-col gap-[6px]">
        <div class="bg-blue-950 h-[2px] w-6 rounded-full"></div>
        <div class="bg-blue-950 h-[2px] w-6 rounded-full"></div>
        <div class="bg-blue-950 h-[2px] w-6 rounded-full"></div>
      </button>
    </div>
    <!-- Desktop Navbar -->
    <div
      ref="navbar"
      class="w-full px-5 lg:px-10 bg-blue-50 text-white hidden md:flex justify-between items-center transition-all duration-200 ease-linear relative z-0"
      :class="{ 'md:-translate-y-full': !isVisible }"
    >
      <p class="text-blue-950 text-3xl font-bold">Shay's Plumbing</p>
      <div class="h-20 flex items-center">
        <NuxtLink
          v-for="link in mainNav"
          :to="link.pageLink"
          class="px-5 h-full text-center flex items-center justify-center text-black hover:bg-blue-200 transition-colors duration-200 ease-linear scroll-smooth"
          :class="{
            'bg-blue-950 text-white hover:!bg-blue-950':
              currentPath === link.pageLink,
          }"
        >
          {{ link.pageTitle }}
        </NuxtLink>
      </div>
    </div>
    <div
      @mouseenter="openServices()"
      @mouseleave="closeServices()"
      class="w-full bg-white flex items-center gap-5 justify-center shadow-sm"
    >
      <NuxtLink
        v-for="service in services"
        :to="service.link"
        class="p-5 hover:bg-blue-200 transition-colors duration-200 ease-linear"
        :class="{ hidden: !serviceLinks, flex: serviceLinks }"
      >
        {{ service.title }}
      </NuxtLink>
    </div>
  </nav>
</template>
<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import { useNavigation } from "#imports";
import { useScrollDirection } from "#imports";
import gsap from "gsap";
import { phone, email, address } from "~/store/detailsStore";

const route = useRoute();
const { mainNav, services } = useNavigation();
const { isVisible } = useScrollDirection();

const currentPath = ref<string | null>(null);
const isScrolled = ref<boolean | null>(false);
const scrollY = ref(0);

const navInfo = ref<HTMLElement | null>(null);
const navBtn = ref<HTMLElement | null>(null);
const navbar = ref<HTMLElement | null>(null);
const mobileNavbar = ref<HTMLElement | null>(null);
const serviceLinks = ref(false);

const emit = defineEmits(["toggleMenu"]);

const handleMenuClick = () => {
  emit("toggleMenu");
  console.log("Button clicked");
};

const openServices = () => {
  serviceLinks.value = true;
};

const closeServices = () => {
  serviceLinks.value = false;
};

onMounted(() => {
  currentPath.value = route.path;
});

watch(
  () => route.fullPath,
  (newPath, oldPath) => {
    currentPath.value = newPath;
  },
);

const handleScroll = () => {
  scrollY.value = window.scrollY;
};

watch(scrollY, (value) => {
  isScrolled.value = value >= 10;
});

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

onMounted(() => {
  if (navBtn.value) {
    gsap.from(navBtn.value, {
      x: "100",
      opacity: 0,
      duration: 0.7,
      ease: "circ.out",
    });
  }

  if (navInfo.value) {
    gsap.from(navInfo.value, {
      x: "-100",
      opacity: 0,
      duration: 0.7,
      ease: "circ.out",
    });
  }

  if (navbar.value) {
    gsap.from(navbar.value, {
      y: "-300",
      opacity: 0,
      duration: 0.7,
      ease: "circ.out",
      clearProps: "all",
    });
  }

  if (mobileNavbar.value) {
    gsap.from(mobileNavbar.value, {
      y: "-300%",
      opacity: 0,
      duration: 0.7,
      ease: "circ.out",
      clearProps: "all",
    });
  }
});
</script>

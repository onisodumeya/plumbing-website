<template>
  <!-- Desktop Hero Section -->
  <section
    class="w-full hidden lg:flex flex-row items-center h-screen bg-blue-950 text-white"
  >
    <div
      ref="heroContent"
      class="w-2/3 h-full flex flex-col gap-10 px-10 py-10 justify-center"
    >
      <div class="flex flex-col gap-7">
        <h1 class="text-6xl font-bold tracking-wider leading-tight">
          {{ heroCopy?.title }}
        </h1>
        <p class="text-xl tracking-wider leading-tight">
          {{ heroCopy?.subtitle }}
        </p>
      </div>
      <div class="flex flex-row md:items-center gap-5 w-full">
        <CallBtn phone="+0000000000"> {{ heroCopy?.cta1 }} </CallBtn>
        <SecondaryBtn>
          {{ heroCopy?.cta2 }}
        </SecondaryBtn>
      </div>
    </div>
    <div class="overflow-hidden w-full lg:w-1/3 h-full">
      <div
        ref="heroImg"
        class="overflow-hidden w-full h-full bg-center bg-cover bg-no-repeat"
        :style="`background-image: url('${bgImg}')`"
      ></div>
    </div>
  </section>
  <!-- Mobile Hero Section -->
  <section class="w-full h-fit lg:hidden">
    <div
      ref="mobileHeroImg"
      class="overflow-hidden w-full h-fit bg-center bg-cover bg-no-repeat relative"
      :style="`background-image: url('${bgImg}')`"
    >
      <!-- Bg cover -->
      <div class="h-fit w-full bg-blue-950/70 px-5 py-10">
        <div
          ref="mobileHeroContent"
          class="w-full lg:w-1/2 h-fit flex flex-col gap-10 py-10"
        >
          <div class="flex flex-col gap-7">
            <h1
              class="text-4xl md:text-6xl font-bold tracking-wider leading-tight text-white"
            >
              {{ heroCopy?.title }}
            </h1>
            <p
              class="text-lg md:text-xl tracking-wider leading-tight text-white"
            >
              {{ heroCopy?.subtitle }}
            </p>
          </div>
          <div
            class="flex flex-col md:flex-row md:items-center gap-5 w-3/4 md:w-full"
          >
            <CallBtn phone="+0000000000"> {{ heroCopy?.cta1 }} </CallBtn>
            <SecondaryBtn>
              {{ heroCopy?.cta2 }}
            </SecondaryBtn>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import bgImg from "../assets/pngs/hero-image.png";
import gsap from "gsap";

const heroImg = ref<HTMLElement | null>(null);
const heroContent = ref<HTMLElement | null>(null);
const mobileHeroImg = ref<HTMLElement | null>(null);
const mobileHeroContent = ref<HTMLElement | null>(null);

// Copywriting content
const heroCopy = {
  title: "The most Reliable plumbers in Your city",
  subtitle:
    "Looking for reliability, fast response and a clean efficient job? You've come to the right place",
  cta1: "Call us now",
  cta2: "Schedule a service",
};

onMounted(() => {
  if (heroImg.value) {
    gsap.from(heroImg.value, {
      x: "100",
      opacity: 0,
      duration: 0.7,
      ease: "circ.out",
    });
  }

  if (heroContent.value) {
    gsap.from(heroContent.value, {
      x: "-100",
      opacity: 0,
      duration: 0.7,
      ease: "power2.out",
    });
  }

  if (mobileHeroImg.value) {
    gsap.from(mobileHeroImg.value, {
      y: "-100",
      duration: 0.7,
      ease: "power2.out",
    });
  }

  if (mobileHeroContent.value) {
    gsap.from(mobileHeroContent.value, {
      x: "-100",
      opacity: 0,
      duration: 0.7,
      delay: 0.8,
      ease: "power2.out",
    });
  }
});
</script>

<template>
  <footer
    ref="footer"
    class="w-full bg-blue-950 p-5 lg:p-10 flex flex-col gap-20 text-white"
  >
    <div class="flex flex-col lg:flex-row gap-20">
      <!-- Logo and company info -->
      <div class="w-full lg:w-2/5 flex flex-col gap-5 lg:gap-10">
        <h1 class="text-4xl">Logo</h1>

        <div class="flex flex-col gap-5 text-sm">
          <!-- Address -->
          <div class="flex gap-2 items-end">
            <MapPin :size="20" />
            <p><b>Address: </b>{{ address }}</p>
          </div>

          <!-- Email -->
          <div class="flex gap-2 items-end">
            <Mail :size="20" />
            <p><b>Email: </b>{{ email }}</p>
          </div>

          <!-- Phone -->
          <div class="flex gap-2 items-end">
            <PhoneCall :size="20" />
            <p><b>Phone: </b>{{ phone.display }}</p>
          </div>
        </div>
      </div>

      <!-- Company links -->
      <div
        class="w-full lg:3/5 flex flex-wrap lg:flex-row lg:justify-end gap-8 lg:gap-10"
      >
        <div
          v-for="section in footerLinks"
          class="flex flex-col text-start gap-3"
        >
          <p class="text-lg font-bold">{{ section.title }}</p>
          <ul class="flex flex-col gap-2">
            <li v-for="link in section.links">
              <NuxtLink
                :target="section.title === 'Our Locations' ? '_blank' : ''"
                :to="link.pageLink"
                class="text-gray-300 hover:text-orange-500 transition-colors duration-200 ease-linear"
              >
                {{ link.pageTitle }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div
      class="w-full border-t border-gray-600 pt-5 flex flex-col lg:flex-row gap-5 justify-between"
    >
      <p class="text-gray-500 text-xs">
        2026 Shay's Plumbing Service. All Rights Reserved
      </p>
    </div>
  </footer>
</template>
<script setup lang="ts">
import { MapPin, Mail, PhoneCall } from "lucide-vue-next";
import { useNavigation } from "#imports";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { onMounted, ref } from "vue";
import { phone, address, email } from "~/store/detailsStore";

if (import.meta.client) {
  gsap.registerPlugin(ScrollTrigger);
}

const { mainNav } = useNavigation();

const footerLinks = [
  { title: "Quick links", links: mainNav },
  {
    title: "Services",
    links: [
      {
        pageLink: "/services/emergency-plumbing",
        pageTitle: "Emergency Plumbing",
      },
      { pageLink: "/services/drain-cleaning", pageTitle: "Drain Cleaning" },
      { pageLink: "/services/leak-repairs", pageTitle: "Leak Repairs" },
      {
        pageLink: "/services/water-heater-installation",
        pageTitle: "Water Heater Installation",
      },
    ],
  },
  {
    title: "Our Locations",
    links: [
      {
        pageLink:
          "https://www.google.com/maps/search/?api=1&query=123+Main+St+New+York+NY+10001",
        pageTitle: "Columbus",
      },
      {
        pageLink:
          "https://www.google.com/maps/search/?api=1&query=123+Main+St+New+York+NY+10001",
        pageTitle: "Dublin",
      },
      {
        pageLink:
          "https://www.google.com/maps/search/?api=1&query=123+Main+St+New+York+NY+10001",
        pageTitle: "Westerville",
      },
      {
        pageLink:
          "https://www.google.com/maps/search/?api=1&query=123+Main+St+New+York+NY+10001",
        pageTitle: "Gahanna",
      },
      {
        pageLink:
          "https://www.google.com/maps/search/?api=1&query=123+Main+St+New+York+NY+10001",
        pageTitle: "Hilliard",
      },
      {
        pageLink:
          "https://www.google.com/maps/search/?api=1&query=123+Main+St+New+York+NY+10001",
        pageTitle: "Reynoldsburg",
      },
    ],
  },
];

const company = [
  {
    pageLink: "/privacy-policy",
    pageTitle: "Privacy Policy",
  },
  {
    pageLink: "/terms-of-service",
    pageTitle: "Terms of Service",
  },
];

const footer = ref<HTMLElement | null>(null);

onMounted(() => {
  if (footer.value) {
    gsap.from(footer.value, {
      y: 50,
      opacity: 0,
      duration: 0.7,
      ease: "circ.out",
      scrollTrigger: {
        trigger: footer.value,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  }
});
</script>

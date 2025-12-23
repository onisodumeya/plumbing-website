<template>
  <HeroSection />

  <div ref="sections" class="flex flex-col gap-28 mt-28">
    <!-- Services section -->
    <section class="sections flex flex-col gap-10 px-5 lg:px-10">
      <div
        class="section-title flex flex-col lg:flex-row items-start lg:items-end gap-2 lg:gap-5"
      >
        <h2
          class="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-950 text-nowrap"
        >
          Our Plumbing Services
        </h2>
        <div class="h-1 bg-blue-950 w-full rounded-sm"></div>
      </div>
      <div class="service-card w-full grid grid-cols-1 md:grid-cols-2 gap-5">
        <div
          v-for="(service, index) in services"
          :key="index"
          :ref="(el) => (serviceCards[index] = el as HTMLElement)"
          class="border border-orange-100 p-5 flex flex-col gap-5 rounded-lg shadow-sm items-center text-center hover:bg-orange-50/50 transition-colors duration-200 ease-linear"
        >
          <component :is="service.icon" :size="30" class="stroke-blue-950" />
          <h3 class="text-lg font-bold text-blue-950">
            {{ service.serviceName }}
          </h3>
          <p class="text-gray-700">{{ service.description }}</p>
        </div>
      </div>
      <div class="services-cta w-full h-auto flex flex-col gap-5 items-center">
        <p class="text-center text-xl font-bold text-blue-950">
          Not sure what you need? Tell us about it
        </p>
        <CallBtn phone="+0000000000">Call us </CallBtn>
      </div>
    </section>

    <!-- Credibility section -->
    <section
      class="sections w-full bg-blue-950 text-blue-950 px-5 lg:px-10 py-10 flex flex-col gap-10"
    >
      <div
        class="section-title flex flex-col lg:flex-row items-start lg:items-end gap-2 lg:gap-5"
      >
        <h2
          class="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-nowrap"
        >
          Why Choose Us?
        </h2>
        <div class="h-1 bg-blue-100 w-full rounded-full"></div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <div
          v-for="(item, index) in trustItems"
          :ref="(el) => (trusts[index] = el as HTMLElement)"
          class="w-full flex flex-col gep-3 items-center p-5 bg-blue-200 rounded-lg"
        >
          <component :is="item.icon" :size="24" class="stroke-blue-950" />

          <p class="text-center text-lg font-bold">
            <NumberCounter
              v-if="item.number1"
              :end="item.number1"
              :suffix="item.suffix"
            />
            <NumberCounter v-if="item.number2" :end="item.number2" />
            {{ item.title }}
          </p>
          <p class="text-center">{{ item.description }}</p>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section
      class="sections w-full flex flex-col items-end gap-10 px-5 lg:px-10 py-10 bg-orange-50 overflow-x-hidden"
    >
      <div
        class="section-title flex flex-col lg:flex-row items-start lg:items-end gap-2 lg:gap-5 w-full"
      >
        <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-950">
          Hear What Others Have To Say
        </h2>
        <div class="h-1 bg-blue-950 w-full rounded-full"></div>
      </div>
      <div
        ref="testimonials"
        v-for="(review, n) in reviews"
        :key="n"
        class="md:w-3/5 p-5 lg:p-10 bg-blue-950 rounded-xl flex flex-col gap-2 text-white"
        :class="{ 'self-start': n % 2 == 0 }"
      >
        <div class="flex items-end justify-between">
          <p class="font-bold text-gray-300">{{ review.user }}</p>
          <div class="p-[6px] bg-white rounded-full w-fit">
            <MessageCircle class="stroke-none fill-blue-950" />
          </div>
        </div>
        <div class="flex items-center gap-2">
          <Star
            v-for="n in review.rating"
            :key="n"
            class="h-5 w-5 fill-yellow-300 stroke-none"
          />
        </div>
        <p class="font-bold text-xl">{{ review.header }}</p>
        <p>{{ review.review }}</p>
      </div>
    </section>
    <!-- CTA Section -->
    <section
      class="sections w-full flex flex-col-reverse lg:flex-row items-center gap-5 bg-blue-950 group"
    >
      <div
        class="sections cta-img h-56 lg:h-80 w-full lg:w-1/2 bg-cover bg-center transition-all duration-200 ease-linear"
        :style="`background-image: url('${bgImg}')`"
      ></div>
      <div class="sections flex flex-col gap-5 p-5 w-full lg:w-1/2 text-white">
        <p class="text-2xl lg:text-3xl font-bold">
          Trusted Local Plumber in Your Area
        </p>
        <p>
          We’re a locally owned plumbing business providing fast, reliable, and
          professional service to homes and businesses in the area. From
          emergency repairs to routine plumbing work, we focus on quality
          workmanship, clear communication, and getting the job done right the
          first time.
        </p>
        <p class="font-bold">Need help right now? We’re ready when you are.</p>
        <div
          class="flex flex-col lg:flex-row items-start lg:items-center gap-5"
        >
          <CallBtn phone="+0000000000"> Call us now </CallBtn>
          <SecondaryBtn> Book a free consultation </SecondaryBtn>
        </div>
      </div>
    </section>
    <!-- Service Area Section -->
    <section id="services" class="px-5 lg:px-10">
      <div class="sections flex flex-col gap-2 mb-10 scroll-smooth">
        <h2
          class="text-2xl md:text-3xl lg:text-4xl text-center font-bold text-blue-950"
        >
          Serving Columbus & Surrounding Areas
        </h2>

        <p class="text-center">
          Fast, reliable plumbing services across the region.
        </p>
      </div>

      <ul
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-center"
      >
        <li
          v-for="(area, index) in serviceAreas"
          :ref="(el) => (areas[index] = el as HTMLElement)"
          :key="area"
          class="flex items-center gap-3 text-sm md:text-base border rounded-lg py-3 px-5 hover:bg-orange-50/50 transition-colors duration-200 ease-linear"
        >
          <MapPin stroke-width="1" />
          {{ area }}
        </li>
      </ul>
    </section>
    <!-- Contact Section -->
    <section
      id="contact"
      class="sections w-full py-10 px-5 lg:px-10 bg-orange-100 flex flex-col gap-10 lg:gap-20 items-center"
    >
      <div
        class="section-title flex flex-col lg:flex-row items-start lg:items-end gap-2 lg:gap-5 w-full"
      >
        <h2
          class="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-950 text-nowrap"
        >
          Contact Us Today
        </h2>
        <div class="h-1 bg-blue-950 w-full rounded-full"></div>
      </div>
      <div
        ref="formParent"
        class="lg:pr-10 pb-5 lg:pb-0 w-full lg:w-4/5 h-fit bg-blue-950 rounded-xl relative flex flex-col-reverse gap-5 lg-gap-10 lg:flex-row-reverse items-center lg:items-center justify-center lg:justify-end"
      >
        <div
          class="flex flex-col lg:flex-row items-center gap-5 lg:gap-10 lg:w-2/5"
        >
          <p class="text-white text-2xl">Or</p>
          <CallBtn phone="+0000000000"> Call us now </CallBtn>
        </div>
        <div
          ref="form"
          class="bg-white h-fit w-full rounded-xl lg:-left-1/2 p-5 lg:p-10 opacity-0"
        >
          <form class="flex flex-col gap-5 lg:gap-10">
            <input
              type="text"
              placeholder="Your Name"
              class="border-b p-2 outline-none w-full"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              class="border-b p-2 outline-none w-full"
            />
            <input
              type="email"
              placeholder="Your Email"
              class="border-b p-2 outline-none w-full"
            />
            <div class="flex flex-col lg:flex-row gap-5">
              <input
                type="text"
                placeholder="State"
                class="border-b p-2 outline-none w-full"
              />
              <input
                type="text"
                placeholder="City"
                class="border-b p-2 outline-none w-full"
              />
              <input
                type="text"
                placeholder="Zip Code"
                class="border-b p-2 outline-none w-full"
              />
            </div>
            <input
              type="text"
              placeholder="Your Address"
              class="border-b p-2 outline-none w-full"
            />

            <textarea
              placeholder="How can we help?"
              class="border-b p-2 outline-none"
            />
            <PrimaryBtn type="submit">Submit</PrimaryBtn>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
import gsap from "gsap";
import bgImg from "../assets/pngs/cta-van.png";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ref, onMounted, watch } from "vue";
import {
  Star,
  Award,
  Clock,
  Droplet,
  ShieldCheck,
  ThumbsUp,
  ArrowBigDown,
  Thermometer,
  AlertCircle,
  MapPin,
  MessageCircle,
} from "lucide-vue-next";

if (import.meta.client) {
  gsap.registerPlugin(ScrollTrigger);
}

const serviceCards = ref<HTMLElement[]>([]);
const trusts = ref<HTMLElement[]>([]);
const areas = ref<HTMLElement[]>([]);
const sections = ref<HTMLElement | null>(null);
const testimonials = ref<HTMLElement[]>([]);
const form = ref<HTMLElement | null>(null);
const formParent = ref<HTMLElement | null>(null);

const trustItems = [
  {
    title: "Years Experience",
    number1: 10,
    number2: 0,
    suffix: "+",
    description: "Serving homes with reliable plumbing solutions",
    icon: Award,
  },
  {
    title: "Emergency Service",
    number1: 24,
    number2: 7,
    suffix: " /",
    description: "We’re available whenever you need us",
    icon: Clock,
  },
  {
    title: "Licensed & Insured",
    number1: 0,
    number2: 0,
    description: "Fully certified for your peace of mind",
    icon: ShieldCheck,
  },
  {
    title: "Satisfaction Guaranteed",
    number1: 0,
    number2: 0,
    description: "We stand behind our work",
    icon: ThumbsUp,
  },
];

const services = [
  {
    icon: AlertCircle,
    serviceName: "Emergency Plumbing",
    description: "Fast response when you need help now",
  },
  {
    icon: ArrowBigDown,
    serviceName: "Drain Cleaning",
    description: "Clear clogs and restore flow",
  },
  {
    icon: Droplet,
    serviceName: "Leak Repairs",
    description: "Fix leaks before they cause damage",
  },
  {
    icon: Thermometer,
    serviceName: "Water Heaters",
    description: "Installation and repairs",
  },
];

const reviews = [
  {
    user: "Michael R.",
    header: "Fast, Professional and Reliable",
    review:
      "Our kitchen sink was completely blocked late at night and they showed up faster then expected. The plumber explained the issue clearly, fixed it neatly and left no mess behind. Excellent service from start to finish",
    rating: 5,
  },
  {
    user: "Daniel K.",
    header: "They saved our business from closing for the day",
    review:
      "A blocked drain nearly shut down our restaurant. These guys responded immediately and had everything working within an hour. Professional, efficient, and respectful of our space. We’ll definitely be using them again.",
    rating: 5,
  },
  {
    user: "Amanda P.",
    header: "Clear communication and fair pricing",
    review:
      "Before starting the job, they explained what needed to be done and how much it would cost—no surprises. The repair was done quickly and works perfectly. It’s rare to find service like this these days.",
    rating: 5,
  },
];

onMounted(() => {
  if (!import.meta.client || !sections.value) return;
  const screenWidth = window.innerWidth;

  // Define all selectors to animate
  const selectors = [".section-title", ".services-cta", ".sections"];

  selectors.forEach((selector) => {
    const elements = sections.value!.querySelectorAll(selector);

    elements.forEach((element) => {
      gsap.from(element, {
        y: 50,
        opacity: 0,
        duration: 0.7,
        ease: "circ.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        delay: 0.1,
      });
    });
  });

  if (serviceCards.value.length > 0) {
    serviceCards.value.forEach((card) => {
      gsap.from(card, {
        y: 50,
        opacity: 0,
        duration: 0.7,
        ease: "circ.out",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        delay: 0.1,
      });
    });
  }

  if (screenWidth <= 800) {
    if (trusts.value.length > 0) {
      trusts.value.forEach((trust) => {
        const delay = 0.1;
        gsap.from(trust, {
          x: -50,
          opacity: 0,
          duration: 0.7,
          ease: "circ.out",
          stagger: 2,
          scrollTrigger: {
            trigger: trust,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          delay: delay,
        });
        delay + 0.5;
      });
    }
  } else {
    if (trusts.value.length > 0) {
      trusts.value.forEach((trust) => {
        const delay = 0.1;
        gsap.from(trust, {
          y: 50,
          opacity: 0,
          duration: 0.7,
          ease: "circ.out",
          stagger: 2,
          scrollTrigger: {
            trigger: trust,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          delay: delay,
        });
        delay + 0.5;
      });
    }
  }

  if (testimonials.value.length > 0) {
    testimonials.value.forEach((testimonial, n) => {
      if (n % 2 == 0) {
        const delay = 0.1;
        gsap.from(testimonial, {
          x: -50,
          opacity: 0,
          duration: 0.7,
          ease: "circ.out",
          stagger: 2,
          scrollTrigger: {
            trigger: testimonial,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          delay: delay,
        });
        delay + 0.5;
      } else {
        const delay = 0.1;
        gsap.from(testimonial, {
          x: 50,
          opacity: 0,
          duration: 0.7,
          ease: "circ.out",
          stagger: 2,
          scrollTrigger: {
            trigger: testimonial,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          delay: delay,
        });
        delay + 0.5;
      }
    });
  }

  if (areas.value.length > 0) {
    areas.value.forEach((area) => {
      const delay = 0.1;
      gsap.from(area, {
        y: 50,
        opacity: 0,
        duration: 0.7,
        ease: "circ.out",
        stagger: 2,
        scrollTrigger: {
          trigger: area,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        delay: delay,
      });
      delay + 0.5;
    });
  }

  if (formParent.value) {
    gsap.from(formParent.value, {
      x: 50,
      opacity: 0,
      duration: 0.7,
      ease: "circ.out",
      stagger: 2,
      scrollTrigger: {
        trigger: formParent.value,
        start: "top 80%",
        toggleActions: "play none none none",
      },
      onComplete: () => {
        gsap.fromTo(
          form.value,
          {
            x: -50,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 0.7,
            ease: "circ.out",
            stagger: 2,
            scrollTrigger: {
              trigger: formParent.value,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      },
    });
  }
});

const serviceAreas = [
  "Columbus",
  "Dublin",
  "Westerville",
  "Gahanna",
  "Hilliard",
  "Reynoldsburg",
];
</script>
<style scoped>
.cta-img {
  clip-path: polygon(20% 0%, 100% 0%, 80% 100%, 0% 100%);
}

.cta-img:hover {
  clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
}

@media (max-width: 800px) {
  .cta-img {
    clip-path: polygon(0% 0%, 100% 0%, 80% 100%, 0% 100%);
  }
}
</style>

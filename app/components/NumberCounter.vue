<!-- components/NumberCounter.vue -->
<script setup lang="ts">
import { ref, onMounted, watch } from "vue";

interface Props {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}

const props = withDefaults(defineProps<Props>(), {
  duration: 1000,
  prefix: "",
  suffix: "",
});

const count = ref(0);
const counterRef = ref<HTMLElement | null>(null);
const hasAnimated = ref(false);

const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4);

const animateCounter = () => {
  const startTime = Date.now();
  const endTime = startTime + props.duration;

  const updateCounter = () => {
    const now = Date.now();
    const progress = Math.min((now - startTime) / props.duration, 1);
    const easedProgress = easeOutQuart(progress);
    const currentCount = Math.floor(easedProgress * props.end);

    count.value = currentCount;

    if (now < endTime) {
      requestAnimationFrame(updateCounter);
    } else {
      count.value = props.end;
    }
  };

  requestAnimationFrame(updateCounter);
};

onMounted(() => {
  if (!counterRef.value) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated.value) {
          animateCounter();
          hasAnimated.value = true;
        }
      });
    },
    { threshold: 0.5 }
  );

  observer.observe(counterRef.value);
});
</script>

<template>
  <span ref="counterRef">
    {{ prefix }}{{ count.toLocaleString() }}{{ suffix }}
  </span>
</template>

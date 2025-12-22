// composables/useScrollDirection.ts
export const useScrollDirection = () => {
  const isVisible = ref(true);
  const lastScrollY = ref(0);
  const scrollThreshold = 10; // Minimum scroll amount to trigger hide/show

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    // Always show navbar at top of page
    if (currentScrollY < 100) {
      isVisible.value = true;
      lastScrollY.value = currentScrollY;
      return;
    }

    // Determine scroll direction
    if (Math.abs(currentScrollY - lastScrollY.value) < scrollThreshold) {
      return; // Don't update if scroll is too small
    }

    if (currentScrollY > lastScrollY.value) {
      // Scrolling down
      isVisible.value = false;
    } else {
      // Scrolling up
      isVisible.value = true;
    }

    lastScrollY.value = currentScrollY;
  };

  onMounted(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
  });

  onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
  });

  return {
    isVisible,
  };
};

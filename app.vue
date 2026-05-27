<template>
  <main class="min-h-screen">
    <!-- Subtle background noise -->
    <div class="fixed inset-0 z-[-1] pointer-events-none">
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.015)_0%,_transparent_70%)]"></div>
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(255,255,255,0.008)_0%,_transparent_50%)]"></div>
    </div>

    <!-- Navigation -->
    <Nav />

    <!-- Page Content -->
    <NuxtPage />
  </main>
</template>

<script setup lang="ts">
// Smooth page load
onMounted(() => {
  document.body.classList.add('page-loaded');
});
</script>

<style lang="scss">
@use "~/assets/scss/main.scss";

body.page-loaded {
  animation: fadeIn 0.6s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>

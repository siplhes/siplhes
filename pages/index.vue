<template>
  <main class="bento-grid">
    <div class="bento-cell bento-hero">
      <Hello />
    </div>
    <div class="bento-cell">
      <About />
    </div>
    <div class="bento-cell">
      <TechStack />
    </div>
    <div class="bento-cell bento-wide">
      <Projects />
    </div>
  </main>
</template>

<script setup>
useHead({
  title: "Joseph Hurtado | Portafolio",
  meta: [{ name: "description", content: "Full Stack Developer — Terminal Portfolio" }],
});

useSeoMeta({
  title: "Joseph Hurtado | Portafolio",
  ogTitle: "Joseph Hurtado | Portafolio",
  description: "Full Stack Developer — Terminal Portfolio built with Nuxt.js",
  ogDescription: "Full Stack Developer — Terminal Portfolio built with Nuxt.js",
  ogImage: "https://example.com/image.png",
  twitterCard: "summary_large_image",
});
</script>

<style scoped>
.bento-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;
  padding: 0.75rem;
  max-width: 1280px;
  margin: 0 auto;
  min-height: calc(100vh - 3.5rem);
}

.bento-cell {
  display: flex;
  flex-direction: column;
}

.bento-cell :deep(.terminal-window) {
  flex: 1;
}

@media (min-width: 768px) {
  .bento-grid {
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    padding: 1rem;
  }
  .bento-hero {
    grid-column: 1 / -1;
  }
  .bento-wide {
    grid-column: 1 / -1;
  }
}
</style>

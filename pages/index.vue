<template>
  <main>
    <Hello />
    <div class="divider"/>
    <About class="scroll-animate"/>
    <TechStack class="scroll-animate"/>
    <div class="divider"/>
    <Projects class="scroll-animate"/>
  </main>
</template>

<script setup>
useHead({
  title: "Joseph Hurtado | Portafolio",
  meta: [{ name: "description", content: "My amazing portafolio." }],
});

useSeoMeta({
  title: "Joseph Hurtado | Portafolio",
  ogTitle: "Joseph Hurtado | Portafolio",
  description: "My amazing portafolio, where i can tell you what i do.",
  ogDescription: "My amazing portafolio, where i can tell you what i do.",
  ogImage: "https://example.com/image.png",
  twitterCard: "summary_large_image",
});

useScrollAnimation();
</script>

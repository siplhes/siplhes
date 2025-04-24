<template>
  <section 

  >

    <div class="card max-w-5xl mx-auto rounded-box grid p-4 place-items-center">
      <h1 class="text-2xl font-semibold mb-4 text-center">Tech Stack</h1>
      <ul class="grid grid-cols-2 md:grid-cols-5 gap-2 justify-center">
        <li v-for="(skill, index) in sortedSkills" :key="index" class="tech-icons">
          ~ {{ skill }}
        </li>
      </ul>
    </div>

  </section>
</template>

<script setup>
// Lazy-loaded skills data
const skills = shallowRef([
  "Javascript",
  "Vue.js",
  "Inertia.js",
  "Nuxt.js",
  "Node.js",
  "Express",
  "HTML",
  "CSS",
  "SCSS",
  "Bootstrap",
  "TailwindCSS",
  "MySQL",
  "Laravel",
  "Postgres",
  "Figma",
  "Fastify",
  "PHP",
]);

const sortedSkills = computed(() => [...skills.value].sort());
</script>

<style scoped>
section{
  @apply bg-[#121212] text-[#fefffa] py-12
}
</style>
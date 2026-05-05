<template>
  <section class="section">
    <div class="container">
      <div class="card p-8 md:p-12">
        <h2 class="text-2xl md:text-3xl font-bold mb-8 text-center text-text">Tech Stack</h2>
        <ul class="flex flex-wrap justify-center gap-3">
          <li v-for="(skill, index) in sortedSkills" :key="index" class="tech-badge">
            {{ skill }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
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
</style>
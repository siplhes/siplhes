<template>
  <section class="p-4">
    <div class="text-center">
      <p class="text-lg">
        Contact:
        <button class="email" data-tip="Copy to clipboard" @click="copyToClipboard">
          siplhes@gmail.com 📋
        </button>
      </p>
      <p class="text-lg">
        <NuxtLink to="https://wa.me/584127698781" target="_blank">
          WhatsApp: +58 412 769 8781
        </NuxtLink>
      </p>
    </div>

    <div class="card bg-base-300 rounded-box grid p-4 my-4 place-items-center">
      <h1 class="text-xl font-bold mb-4">Tech Stack</h1>
      <ul class="flex flex-wrap gap-4 justify-center">
        <li
          v-for="(skill, index) in sortedSkills"
          :key="index"
          class="tech-icons"
        > > {{ skill }}
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { computed, shallowRef, onUnmounted } from "vue";
const { $toast } = useNuxtApp();

// Reusable function for clipboard copy
const useClipboard = (text) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(text);
    $toast.success("Email copiado 📋");
  };
  return { copyToClipboard };
};

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

const { copyToClipboard } = useClipboard("siplhes@gmail.com");

</script>

<style scoped>
.card {
  @apply rounded-lg p-6;
}


.tooltip {
  @apply relative cursor-pointer;
}
</style>

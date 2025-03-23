<template>
  <section class="p-4">
    <p class="text-center">
      Contacto:
      <button
        class="email tooltip"
        data-tip="Copy to clipboard"
        @click="copyToClipboard"
      >
        siplhes@gmail.com 📋
      </button>
    </p>

    <div class="card bg-base-300 rounded-box grid p-4 my-4 place-items-center">
      <h1 class="text-xl font-bold mb-4">Technologias</h1>
      <ul class="flex flex-wrap gap-4 justify-center">
        <li
          v-for="(skill, index) in skills"
          :key="index"
          class="font-mono bg-[#121212] text-[#fefffa] hover:text-[#121212] hover:bg-[#fefffa] p-2 rounded transition-all duration-300"
        >
          > {{ skill }}
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
const { $toast } = useNuxtApp();

const copyToClipboard = () => {
  navigator.clipboard.writeText("siplhes@gmail.com");
  $toast.success("Email copiado 📋");
};

const skills = [
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
];
</script>

<style scoped>
li {
  border-radius: 8px;
}
</style>

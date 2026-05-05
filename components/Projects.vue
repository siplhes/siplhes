<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const projects = [
  {
    img: "/images/az.webp",
    title: t('az.title'),
    resume: t('az.description'),
    url: "https://adoptazulia.org.ve",
    more: "/adoptazulia#project",
    techs: [
      "Nuxt.js",
      "Vue.js",
      "CSS",
      "TailwindCSS",
      "DaisyUI",
      "Node.js",
      "Express.js",
      "MySQL",
      "AWS",
    ],
  }, 
  {
    img: "/images/nsfw.webp",
    title: t('nsfw.title'),
    resume: t('nsfw.description'),
    url: "https://nsfwclothes.vercel.app/",
    more: "/nsfwclothes#project",
    techs: [
      "Nuxt.js",
      "Vue.js",
      "CSS",
      "TailwindCSS",
      "Node.js",
      "Fastify",
      "Json",
    ],
  },
  {
    img: "/images/book.webp",
    title: t('bac.title'),
    resume: t('bac.description'),
    url: "https://bookachoose.vercel.app",
    more: "/bookachoose#project",
    techs: [
      "Nuxt.js",
      "Vue.js",
      "CSS",
      "TailwindCSS",
      "Firebase RTDB",
      "AWS",
    ],
  },
];
</script>

<template>
  <section class="section bg-background">
    <div class="container">
      <h2 class="text-2xl md:text-3xl font-bold mb-8 text-center text-text">{{ t("projects_title") }}</h2>
      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div v-for="(project, index) in projects" :key="index" class="project-card">
          <NuxtImg
            :src="project.img"
            class="w-full h-48 object-cover"
            alt="Project logo"
          />
          <div class="p-6">
            <h3 class="text-xl font-bold mb-3 text-text">{{ project.title }}</h3>
            <p class="text-text-muted mb-4 text-sm leading-relaxed">{{ project.resume }}</p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span v-for="(tech, techIndex) in project.techs" :key="techIndex" class="tech-badge text-xs px-3 py-1">
                {{ tech }}
              </span>
            </div>
            <div class="flex gap-3">
              <NuxtLink class="btn btn-primary flex-1" :to="project.url" target="_blank">{{ t("visit") }}</NuxtLink>
              <NuxtLink class="btn btn-outline flex-1" :to="project.more">{{ t("learn_more") }}</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>

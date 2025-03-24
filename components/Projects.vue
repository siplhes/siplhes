<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const projects = [
  {
    img: "/images/nsfw.webp",
    title: t('nsfw.title'),
    resume: t('nsfw.description'),
    url: "https://nsfwclothes.store/",
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
      "DaisyUI",
      "Node.js",
      "Express.js",
      "MySQL",
      "AWS",
    ],
  },
];
</script>

<template>
  <section class="projects-section card">
    <h1 class="projects-title">{{ t("projects_title") }}</h1>
    <div v-for="(project, index) in projects" :key="index" class="project-card">
      <div class="project-grid">
        <figure class="project-image">
          <NuxtImg
            :src="project.img"
            alt="Project logo"
          />
        </figure>
        <div class="project-content">
          <div class="card-body">
            <h2 class="project-title">{{ project.title }}</h2>
            <p class="project-resume">{{ project.resume }}</p>
            <ul class="project-techs">
              <li v-for="(techs, index) in project.techs" :key="index" class="tech-item" >
                > {{ techs }}
              </li>
            </ul>
            <div class="project-actions ">
              <NuxtLink class="btn" :to="project.url" target="_blank">{{ t("visit") }}</NuxtLink>
              <NuxtLink class="btn" :to="project.more">{{ t("learn_more") }}</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects-section {
  @apply rounded grid p-4 my-4 mx-auto max-w-7xl;
}

.projects-title {
  @apply text-2xl font-bold text-center mb-6;
}

.project-card {
  @apply mb-8;
}

.project-grid {
  @apply grid grid-cols-1 lg:grid-cols-3 gap-6 items-center;
}

.project-image {
  @apply col-span-1;
}

.project-image img {
  @apply h-[200px] lg:h-[250px] w-full object-cover rounded-lg;
}

.project-content {
  @apply col-span-2;
}

.project-title {
  @apply text-lg font-bold;
}

.project-resume {
  @apply text-sm lg:text-base text-justify;
}

.project-techs {
  @apply flex flex-wrap gap-2 mt-4;
}

.tech-item {
  @apply text-sm font-medium;
}

.project-actions {
  @apply  flex flex-col sm:flex-row justify-center lg:justify-end gap-4 mt-4;
}
</style>

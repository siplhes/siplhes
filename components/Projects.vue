<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const projects = [

    {
    img: "/images/az.webp",
    title: t('az.title'),
    resume: t('az.description'),
     url: "https://adopta-zulia.vercel.app",
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
  }, {
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
      "Firebase RTDB",
      "AWS",
    ],
  },
];
</script>

<template>
  <section
  class="bg-fixed"
  style="background-image: url('pattern.svg')"
  >
  <div  class="projects-section 
  card "> 
  <div class="projects-container" >  
    <h1 class="projects-title">{{ t("projects_title") }}</h1>
    <div v-for="(project, index) in projects" :key="index" class="project-card">
      <div class="project-grid">
          <NuxtImg
            :src="project.img"
            class="project-image"
            alt="Project logo"
          />
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
    </div></div> </div>
  </section>
</template>

<style scoped>
.projects-section {
  @apply grid py-4 mx-auto w-full bg-[#121212]/85 backdrop-blur-sm;
}
.projects-container{
  @apply max-w-5xl mx-auto px-4 sm:px-6 lg:px-8;
}

.projects-title {
  @apply text-2xl  font-bold text-center mb-3;
}

.project-card {
  @apply mb-3 bg-[#121212] p-4 rounded-md;
}

.project-grid {
  @apply grid grid-cols-1 lg:grid-cols-3 gap-2 items-center;
}

.project-image {
  @apply col-span-1 object-cover rounded-md h-80;
} 

.project-content {
  @apply col-span-2 w-full;
}

.project-title {
  @apply text-5xl font-bold text-center;
}

.project-resume {
  @apply text-sm lg:text-base text-justify p-4;
}

.project-techs {
  @apply grid grid-cols-4 gap-2 mt-4 p-4;
}

.tech-item {
  @apply text-sm font-medium;
}

.project-actions {
  @apply  flex flex-col sm:flex-row justify-center lg:justify-end gap-4 mt-4;
}

.project-section-tite {
  @apply text-4xl font-bold text-center text-[#121212];
}
</style>

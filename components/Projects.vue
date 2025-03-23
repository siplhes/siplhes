<script setup>
const projects = [
  {
    img: "/images/nsfw.webp",
    title: "NSFW Clothes site",
    resume:
      "SPA para una marca de ropa, Me encargue de todo el desarollo del sitio utilizando Nuxt.js y Vue.js que viene integrado para el front-end junto con Tailwind y utilizando una RESTApi como Back-end utilizando Node.js + Fastify",
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
    title: "Book-a-Choose",
    resume:
      "Personal project about a Social platform for writers and readers to share their stories, i worked with Nuxt.JS and Tailwind CSS for Front-end working with Node.js and Express + MySql for back-end RESTApi.",
    url: "/bookachoose#sorry",
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
  <section class="card bg-base-300 rounded-box grid p-4 my-4 mx-auto max-w-7xl">
    <h1 class="text-2xl font-bold text-center mb-6">Projects</h1>
    <div v-for="(project, index) in projects" :key="index" class="mb-8">
      <div class="rounded-lg shadow-lg p-2">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
          <figure class="col-span-1">
            <NuxtImg
              :src="project.img"
              class="h-[200px] lg:h-[250px] w-full object-cover rounded-lg"
              alt="Project logo"
            />
          </figure>

          <div class="col-span-2">
            <div class="card-body">
              <h2
                class="card-title text-[#6290ce] text-lg lg:text-xl font-bold text-center lg:text-left"
              >
                {{ project.title }}
              </h2>
              <p class="text-sm lg:text-base text-justify">
                {{ project.resume }}
              </p>
              <ul class="flex flex-wrap gap-2 mt-4">
                <li
                  v-for="(techs, index) in project.techs"
                  :key="index"
                  class="font-mono bg-[#121212] text-[#fefffa] hover:text-[#121212] hover:bg-[#fefffa] px-3 py-1 rounded"
                >
                  > {{ techs }}
                </li>
              </ul>
              <div
                class="card-actions flex flex-col sm:flex-row justify-center lg:justify-end gap-4 mt-4"
              >
                <NuxtLink class="btn" :to="project.url" target="_blank"
                  >Link</NuxtLink
                >
                <NuxtLink class="btn" :to="project.more">Learn More</NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

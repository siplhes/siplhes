<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const projects = [
  {
    img: "/images/az.webp",
    title: t("az.title"),
    resume: t("az.description"),
    url: "https://adoptazulia.org.ve",
    more: "/project/adoptazulia",
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
    title: t("nsfw.title"),
    resume: t("nsfw.description"),
    url: "https://nsfwclothes.vercel.app/",
    more: "/project/nsfwclothes",
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
    title: t("bac.title"),
    resume: t("bac.description"),
    url: "https://bookachoose.vercel.app",
    more: "/project/bookachoose",
    techs: [
      "Nuxt.js",
      "Vue.js",
      "CSS",
      "TailwindCSS",
      "Firebase RTDB",
      "AWS",
    ],
  },
  {
    img: "",
    title: t("skprt.title"),
    resume: t("skprt.description"),
    url: "#",
    more: "/project/skprt",
    techs: [
      "Nuxt.js",
      "Vue.js",
      "TypeScript",
      "TailwindCSS",
      "PostgreSQL",
      "Stripe",
      "Docker",
      "AWS",
    ],
  },
];

const dates = [
  "Mon Jan 15",
  "Wed Mar 22",
  "Fri Sep 08",
  "Mon May 20",
];

const sizes = ["4.2 KB", "2.1 KB", "3.7 KB", "---"];

const expandedIndex = ref<number | null>(null);

function toggleExpand(index: number) {
  expandedIndex.value = expandedIndex.value === index ? null : index;
}
</script>

<template>
  <div class="h-full">
    <div class="terminal-window h-full">
      <div class="terminal-header">
        <span class="terminal-dot close"></span>
        <span class="terminal-dot minimize"></span>
        <span class="terminal-dot maximize"></span>
        <span class="terminal-title">~/projects.sh</span>
      </div>
      <div class="terminal-body">
        <div class="prompt-line mb-2">
          <span class="prompt-symbol"></span>
          <span class="text-text-muted text-sm">ls -la ./projects/</span>
        </div>

        <div class="font-mono text-sm space-y-1 mb-3">
          <!-- Header -->
          <div class="flex items-center gap-2 px-2 py-1 text-text-muted2 text-xs">
            <span class="w-24 shrink-0">Permissions</span>
            <span class="w-18 shrink-0">Size</span>
            <span class="w-20 shrink-0">Date</span>
            <span>Name</span>
          </div>

          <div
            v-for="(project, index) in projects"
            :key="index"
          >
            <!-- Main listing line (clickable) -->
            <div
              class="flex items-center gap-2 px-2 py-1 rounded cursor-pointer transition-colors hover:bg-white/5 group"
              @click="toggleExpand(index)"
            >
              <span class="text-text-muted2 text-xs w-24 shrink-0">drwxr-xr-x</span>
              <span class="text-text-muted2 text-xs w-18 shrink-0 text-right">{{ sizes[index] }}</span>
              <span class="text-text-muted2 text-xs w-20 shrink-0">{{ dates[index] }}</span>
              <span class="text-text-muted group-hover:text-white transition-colors text-sm">
                ./{{ project.title.toLowerCase().replace(/\s+/g, "-") }}/
              </span>
              <span class="text-text-muted2 text-xs ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                [expand]
              </span>
            </div>

            <!-- Expanded details -->
            <Transition name="details-slide">
              <div
                v-if="expandedIndex === index"
                class="ml-6 pl-3 border-l border-white/10 space-y-1.5 py-1.5 mb-1"
              >
                <!-- Description -->
                <div class="flex items-start gap-2 text-xs">
                  <span class="text-white-muted shrink-0">│</span>
                  <div>
                    <span class="text-text-muted2 text-xs">Description:</span>
                    <span class="text-text-muted ml-1">{{ project.resume }}</span>
                  </div>
                </div>

                <!-- Tech tags -->
                <div class="flex items-start gap-2 text-xs">
                  <span class="text-white-muted shrink-0">│</span>
                  <div class="flex flex-wrap gap-1.5">
                    <span class="text-text-muted2 text-xs">Tech:</span>
                    <span
                      v-for="(tech, ti) in project.techs"
                      :key="ti"
                      class="inline-flex items-center px-2 py-0.5 font-mono text-xs rounded bg-white/[0.03] border border-white/[0.08] text-white/50"
                    >
                      {{ tech }}
                    </span>
                  </div>
                </div>

                <!-- Actions -->
                <div class="flex items-start gap-2 text-xs pt-1">
                  <span class="text-white-muted shrink-0">│</span>
                  <div class="flex gap-2">
                    <NuxtLink
                      :to="project.url"
                      target="_blank"
                      class="px-3 py-1 rounded text-xs font-semibold bg-white/10 text-white hover:bg-white/20 transition-colors border border-white/20"
                    >
                      Visit
                    </NuxtLink>
                    <NuxtLink
                      :to="project.more"
                      class="px-3 py-1 rounded text-xs font-semibold text-text-muted hover:text-white transition-colors border border-border hover:border-white/30"
                    >
                      Details
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </Transition>
          </div>
        </div>

        <div class="text-text-muted2 text-xs border-t border-white/5 pt-2 mt-2">
          <span class="text-white-dim">total</span> {{ projects.length }}
          <span class="text-white-dim ml-1">◆</span>
          Click to expand
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.details-slide-enter-active,
.details-slide-leave-active {
  transition: all 0.25s ease;
}

.details-slide-enter-from,
.details-slide-leave-to {
  opacity: 0;
  max-height: 0;
  transform: translateY(-8px);
}

.details-slide-enter-to,
.details-slide-leave-from {
  opacity: 1;
  max-height: 300px;
  transform: translateY(0);
}
</style>

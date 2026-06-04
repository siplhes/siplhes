<script setup lang="ts">
import { computed } from "vue";
import { usePortfolioData } from "~/composables/usePortfolioData";
import { useTechData } from "~/composables/useTechData";

const { projects: projectsData } = usePortfolioData();
const { resolveTechSlugs } = useTechData();

const accentMap: Record<string, string> = {
  adoptazulia: "blue",
  nsfwclothes: "purple",
  bookachoose: "orange",
  skprt: "green",
};

const projects = computed(() => {
  if (!projectsData.value) return [];
  return Object.entries(projectsData.value).map(([slug, p]) => ({
    slug,
    img: p.images?.[p.primaryImageIndex ?? 0] || p.logo?.src || "",
    title: p.title || slug,
    description: p.description || "",
    url: p.url,
    more: `/project/${slug}`,
    techs: resolveTechSlugs(p.techs || []),
    accent: accentMap[slug] || "blue",
  }));
});
</script>

<template>
  <div class="group/card">
    <div class="flex items-center justify-between mb-5 stagger-item" :style="{ '--item-index': 0 }">
      <div class="section-label mb-0">Projects</div>
      <span class="text-xs text-text-muted2 font-mono">{{ projects.length }} total</span>
    </div>

    <div v-if="projects.length" class="grid grid-cols-1 md:grid-cols-2 gap-4 stagger-item" :style="{ '--item-index': 1 }">
      <NuxtLink
        v-for="(project, index) in projects"
        :key="index"
        :to="project.more"
        class="group/project relative overflow-hidden rounded-2xl border border-border bg-surface p-5 transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-card-hover"
        :class="{
          'hover:border-blue/20': project.accent === 'blue',
          'hover:border-purple/20': project.accent === 'purple',
          'hover:border-orange/20': project.accent === 'orange',
          'hover:border-green/20': project.accent === 'green',
        }"
      >
        <!-- Accent line - animates from center on hover -->
        <div
          class="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-[2px] rounded-full transition-all duration-500 ease-out group-hover/project:w-full group-hover/project:opacity-100"
          :class="{
            'bg-blue/60': project.accent === 'blue',
            'bg-purple/60': project.accent === 'purple',
            'bg-orange/60': project.accent === 'orange',
            'bg-green/60': project.accent === 'green',
          }"
        ></div>

        <!-- Subtle glow effect on hover -->
        <div
          class="absolute -inset-0 opacity-0 transition-opacity duration-500 group-hover/project:opacity-100 pointer-events-none"
          :class="{
            'bg-gradient-to-b from-blue/[0.02] to-transparent': project.accent === 'blue',
            'bg-gradient-to-b from-purple/[0.02] to-transparent': project.accent === 'purple',
            'bg-gradient-to-b from-orange/[0.02] to-transparent': project.accent === 'orange',
            'bg-gradient-to-b from-green/[0.02] to-transparent': project.accent === 'green',
          }"
        ></div>

        <div class="flex flex-col h-full relative z-[1]">
          <!-- Project image or placeholder -->
          <div
            v-if="project.img"
            class="w-full h-32 rounded-lg overflow-hidden mb-3 bg-surface2"
          >
            <NuxtImg
              :src="project.img"
              :alt="project.title"
              class="w-full h-full object-cover transition-all duration-700 ease-out group-hover/project:scale-110 group-hover/project:brightness-110"
            />
          </div>
          <div
            v-else
            class="w-full h-32 rounded-lg mb-3 bg-surface2 flex items-center justify-center transition-all duration-500 group-hover/project:bg-white/[0.04]"
          >
            <span class="text-3xl font-bold text-text-muted2/30 font-mono transition-all duration-500 group-hover/project:text-white/40 group-hover/project:scale-110">
              {{ project.title.charAt(0) }}
            </span>
          </div>

          <!-- Content with subtle lift on hover -->
          <div class="transition-all duration-500 group-hover/project:translate-y-[-1px]">
            <h3 class="text-sm font-semibold text-white transition-colors duration-300">
              {{ project.title }}
              <span class="inline-block opacity-0 -translate-x-1 transition-all duration-300 group-hover/project:opacity-100 group-hover/project:translate-x-0">→</span>
            </h3>
            <p class="text-xs text-text-muted mt-1 leading-relaxed line-clamp-2">
              {{ project.description }}
            </p>
          </div>

          <!-- Tech tags -->
          <div class="flex flex-wrap gap-1 mt-3">
            <TechTag
              v-for="(tech, ti) in project.techs.slice(0, 3)"
              :key="ti"
              :slug="tech.slug"
              :label="tech.label"
              :style="{ transitionDelay: `${ti * 40}ms` }"
              size="xs"
            />
            <span
              v-if="project.techs.length > 3"
              class="inline-flex items-center px-2 py-0.5 text-[10px] font-mono rounded-md text-text-muted2"
            >
              +{{ project.techs.length - 3 }}
            </span>
          </div>

          <!-- Arrow hint with enhanced animation -->
          <div class="mt-auto pt-3 flex items-center gap-1 text-[10px] font-mono text-text-muted2 transition-all duration-300 group-hover/project:text-text-muted">
            <span>View details</span>
            <Icon name="lucide:arrow-right" class="w-3 h-3 transition-all duration-300 ease-out group-hover/project:translate-x-1 group-hover/project:opacity-80" />
          </div>
        </div>

        <!-- Corner accent decoration -->
        <div class="absolute bottom-0 right-0 w-16 h-16 opacity-0 transition-all duration-500 group-hover/project:opacity-100 pointer-events-none overflow-hidden rounded-br-2xl"
          :class="{
            'text-blue/10': project.accent === 'blue',
            'text-purple/10': project.accent === 'purple',
            'text-orange/10': project.accent === 'orange',
            'text-green/10': project.accent === 'green',
          }"
        >
          <svg viewBox="0 0 100 100" class="w-full h-full" fill="currentColor">
            <polygon points="100,0 100,100 0,100" />
          </svg>
        </div>
      </NuxtLink>
    </div>

    <!-- Empty state -->
    <div v-else class="text-text-muted2 text-sm font-mono text-center py-8">
      Loading projects...
    </div>
  </div>
</template>

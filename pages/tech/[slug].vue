<template>
  <div class="min-h-screen py-12">
    <div class="container">
      <!-- Navigation back -->
      <div class="mb-6">
        <NuxtLink
          to="/#tech"
          class="inline-flex items-center gap-1 text-text-muted hover:text-white transition-colors font-mono text-sm"
        >
          <span class="text-white-muted">$</span>
          <span>cd .. &amp;&amp; ls -la</span>
          <span class="text-text-muted2 text-sm ml-1"># back to portfolio</span>
        </NuxtLink>
      </div>

      <div v-if="techInfo" class="terminal-window">
        <div class="terminal-header">
          <span class="terminal-dot close"></span>
          <span class="terminal-dot minimize"></span>
          <span class="terminal-dot maximize"></span>
          <span class="terminal-title">man {{ techInfo.slug }}</span>
        </div>
        <div class="terminal-body">
          <!-- Tech header -->
          <div class="man-header mb-6">
            <div class="flex items-center gap-3 mb-1">
              <h1 class="text-xl md:text-2xl font-bold text-white font-mono">
                {{ techInfo.label }}
              </h1>
              <span class="text-[10px] font-mono text-text-muted2 uppercase tracking-widest border border-white/10 rounded px-2 py-0.5">
                {{ techInfo.category }}
              </span>
            </div>
            <p class="text-text-muted2 text-sm font-mono">
              {{ techInfo.slug.toUpperCase() }}(7) — Technology Stack
            </p>
          </div>

          <!-- Description -->
          <div v-if="techInfo.description" class="man-section mb-6">
            <h2 class="man-section-title">DESCRIPTION</h2>
            <p class="man-section-text">{{ techInfo.description.desc }}</p>
            <div v-if="techInfo.description.years" class="mt-2 inline-flex items-center gap-1.5 text-xs font-mono text-green/70 border border-green/10 rounded-lg px-3 py-1.5">
              <span class="text-green">◆</span>
              {{ techInfo.description.years }} experience
            </div>
          </div>

          <!-- Projects using this tech -->
          <div v-if="projects.length" class="man-section">
            <h2 class="man-section-title">PROJECTS</h2>
            <p class="man-section-text text-sm text-text-muted2 mb-4">
              {{ projects.length }} project{{ projects.length === 1 ? '' : 's' }} using {{ techInfo.label }}
            </p>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <NuxtLink
                v-for="(proj, pi) in projects"
                :key="pi"
                :to="`/project/${proj.slug}`"
                class="group/project relative overflow-hidden rounded-xl border border-border bg-surface p-4 transition-all duration-300 hover:border-white/15 hover:-translate-y-1 hover:shadow-lg"
              >
                <div class="flex flex-col h-full">
                  <!-- Project image -->
                  <div
                    v-if="proj.images?.[proj.primaryImageIndex ?? 0]"
                    class="w-full h-28 rounded-lg overflow-hidden mb-3 bg-surface2"
                  >
                    <NuxtImg
                      :src="proj.images[proj.primaryImageIndex ?? 0]"
                      :alt="proj.title"
                      class="w-full h-full object-cover transition-all duration-500 group-hover/project:scale-105"
                    />
                  </div>
                  <div
                    v-else
                    class="w-full h-28 rounded-lg mb-3 bg-surface2 flex items-center justify-center"
                  >
                    <span class="text-2xl font-bold text-text-muted2/20 font-mono">{{ proj.title?.charAt(0) }}</span>
                  </div>

                  <h3 class="text-sm font-semibold text-white mb-1 group-hover/project:text-white/90 transition-colors">
                    {{ proj.title }}
                    <span class="inline-block opacity-0 -translate-x-1 transition-all duration-300 group-hover/project:opacity-100 group-hover/project:translate-x-0">→</span>
                  </h3>
                  <p class="text-xs text-text-muted leading-relaxed line-clamp-2 mb-3">
                    {{ proj.description }}
                  </p>

                  <!-- Tech tags -->
                  <div class="flex flex-wrap gap-1.5 mt-auto">
                    <span
                      v-for="(ts, ti) in proj.techs?.slice(0, 4)"
                      :key="ti"
                      class="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.06]"
                      :class="ts === techInfo.slug ? 'text-green/80 border-green/15 bg-green/[0.03]' : 'text-text-muted2'"
                    >
                      {{ resolveSlug(ts) }}
                    </span>
                    <span
                      v-if="(proj.techs?.length || 0) > 4"
                      class="text-[10px] font-mono px-2 py-0.5 text-text-muted2"
                    >
                      +{{ (proj.techs?.length || 0) - 4 }}
                    </span>
                  </div>
                </div>
              </NuxtLink>
            </div>
          </div>

          <!-- No projects -->
          <div v-else class="man-section">
            <h2 class="man-section-title">PROJECTS</h2>
            <p class="man-section-text text-text-muted2">No projects currently using {{ techInfo.label }}.</p>
          </div>

          <!-- Footer -->
          <div class="mt-8 pt-4 border-t border-white/5 text-center text-text-muted2 text-sm font-mono">
            <p>Portfolio v1.0.0 — 2026 — siplhes</p>
          </div>
        </div>
      </div>

      <!-- Not found -->
      <div v-else class="terminal-window max-w-md mx-auto">
        <div class="terminal-body text-center">
          <div class="text-text-muted text-4xl mb-4">!</div>
          <p class="text-text-muted font-mono">ERROR: Tech stack not found</p>
          <NuxtLink to="/" class="btn btn-outline mt-4 inline-block text-sm">
            cd ..
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from "vue";

const route = useRoute();
const { projects: projectsData, loadAll } = usePortfolioData();
const { getTechBySlug, resolveTechSlugs } = useTechData();

onMounted(() => {
  loadAll();
});

const slug = computed(() => route.params.slug as string);
const techInfo = computed(() => getTechBySlug(slug.value));

const projects = computed(() => {
  if (!projectsData.value) return [];
  return Object.values(projectsData.value).filter((p) => p.techs?.includes(slug.value));
});

function resolveSlug(s: string): string {
  const resolved = getTechBySlug(s);
  return resolved?.label || s;
}

useSeoMeta({
  title: computed(() => `${techInfo.value?.label || 'Tech Stack'} — Joseph Hurtado`),
  description: computed(() => `Projects using ${techInfo.value?.label || 'technology'} — Joseph Hurtado Portfolio`),
});
</script>

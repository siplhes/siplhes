<template>
  <div v-if="project" class="min-h-screen py-12">
    <div class="container">
      <div class="man-page">
        <!-- Navigation back -->
        <div class="mb-6">
          <NuxtLink
            to="/"
            class="inline-flex items-center gap-1 text-text-muted hover:text-white transition-colors font-mono text-sm"
          >
            <span class="text-white-muted">$</span>
            <span>cd .. &amp;&amp; ls -la</span>
            <span class="text-text-muted2 text-sm ml-1"># back to portfolio</span>
          </NuxtLink>
        </div>

        <div class="terminal-window">
          <!-- Man page header -->
          <div class="terminal-header">
              <span class="terminal-dot close"></span>
              <span class="terminal-dot minimize"></span>
              <span class="terminal-dot maximize"></span>
              <span class="terminal-title">man {{ project.slug || route.params.slug }}</span>
              <NuxtLink
                v-if="isAdmin"
                :to="`/admin/projects/edit/${route.params.slug}`"
                class="ml-auto px-2 py-0.5 text-[10px] font-mono rounded border border-green/20 text-green/70 hover:bg-green/10 hover:text-green transition-all"
              >
                <Icon name="lucide:pencil" class="w-3 h-3 inline-block mr-0.5 align-[-2px]" />
                edit project
              </NuxtLink>
            </div>
          <div class="terminal-body">
            <!-- Man page name -->
            <div class="man-header">
              <h1 class="text-xl md:text-2xl font-bold text-white mb-1 font-mono">
                {{ project.title }}
              </h1>
              <p class="text-text-muted2 text-sm font-mono">
                {{ project.slug.toUpperCase() }}(1) — Full Stack Project
              </p>
            </div>

            <!-- Project hero image -->
            <div v-if="heroImage" class="mb-8 rounded-lg overflow-hidden border border-white/5">
              <NuxtImg
                :src="heroImage"
                :alt="project.title"
                class="w-full object-cover max-h-80"
              />
            </div>
            <div v-else-if="project.logo.type === 'image' && project.logo.src" class="flex justify-center mb-8">
              <NuxtImg
                :src="project.logo.src"
                :class="project.logo.className"
                alt="Project logo"
              />
            </div>

            <!-- Man page sections -->
            <div class="space-y-8">
              <!-- NAME -->
              <div class="man-section">
                <h2 class="man-section-title">NAME</h2>
                <p class="man-section-text">
                  <span class="man-flag">{{ project.title }}</span>
                  — {{ project.description }}
                </p>
              </div>

              <!-- SYNOPSIS -->
              <div class="man-section">
                <h2 class="man-section-title">SYNOPSIS</h2>
                <div class="man-section-text font-mono text-sm bg-surface2/50 p-4 rounded border border-border">
                  <div class="text-white-dim">$ ./project --info {{ project.slug }}</div>
                  <div class="text-text-muted mt-1">{{ project.title }} — {{ project.duration }}</div>
                </div>
              </div>

              <!-- DESCRIPTION -->
              <div class="man-section">
                <h2 class="man-section-title">DESCRIPTION</h2>
                <p v-if="project.purpose" class="man-section-text">{{ project.purpose }}</p>
                <p v-if="project.objective" class="man-section-text">{{ project.objective }}</p>
              </div>

              <!-- APPROACH -->
              <div v-if="project.approach" class="man-section">
                <h2 class="man-section-title">APPROACH</h2>
                <p class="man-section-text">{{ project.approach }}</p>
              </div>

              <!-- TECHNOLOGIES -->
              <div v-if="project.techs?.length" class="man-section">
                <h2 class="man-section-title">TECHNOLOGIES</h2>
                <div class="flex flex-wrap gap-2">
                  <TechTag
                    v-for="(slug, ti) in project.techs"
                    :key="ti"
                    :slug="slug"
                    :label="resolveTechSlug(slug)"
                    size="sm"
                  />
                </div>
              </div>

              <!-- ROLE -->
              <div v-if="project.role" class="man-section">
                <h2 class="man-section-title">ROLE</h2>
                <p class="man-section-text">{{ project.role }}</p>
              </div>

              <!-- DURATION -->
              <div v-if="project.duration" class="man-section">
                <h2 class="man-section-title">DURATION</h2>
                <p class="man-section-text">{{ project.duration }}</p>
              </div>

              <!-- CHARACTERISTICS -->
              <div v-if="project.hasCharacteristics && project.characteristics?.length" class="man-section">
                <h2 class="man-section-title">FEATURES</h2>
                <ul class="list-none space-y-1">
                  <li
                    v-for="(item, idx) in project.characteristics"
                    :key="idx"
                    class="man-section-text flex items-start gap-2"
                  >
                    <span class="text-white-muted mt-1">•</span>
                    <span>{{ item }}</span>
                  </li>
                </ul>
              </div>

              <!-- FUTURE ENHANCEMENTS -->
              <div v-if="project.futureEnhancements?.length" class="man-section">
                <h2 class="man-section-title">FUTURE ENHANCEMENTS</h2>
                <ul class="list-none space-y-1">
                  <li
                    v-for="(item, idx) in project.futureEnhancements"
                    :key="idx"
                    class="man-section-text flex items-start gap-2"
                  >
                    <span class="text-text-muted mt-1">○</span>
                    <span>{{ item }}</span>
                  </li>
                </ul>
              </div>

              <!-- FINAL PRODUCT / Gallery -->
              <div v-if="project.images?.length" class="man-section">
                <h2 class="man-section-title">FINAL PRODUCT</h2>
                <ProjectGallery :images="project.images" :alt="project.title" />
              </div>

              <!-- SEE ALSO -->
              <div class="man-section">
                <h2 class="man-section-title">SEE ALSO</h2>
                <div class="flex flex-wrap gap-3">
                  <a
                    :href="project.url"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="group/cta inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-white text-background text-sm font-semibold transition-all duration-300 hover:bg-white/90 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] active:scale-[0.97]"
                  >
                    <Icon name="uil:external-link-alt" class="w-4 h-4 transition-transform duration-300 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" />
                    Live Project
                    <Icon name="lucide:arrow-up-right" class="w-3.5 h-3.5 opacity-0 -translate-x-1 transition-all duration-300 group-hover/cta:opacity-100 group-hover/cta:translate-x-0" />
                  </a>
                  <NuxtLink
                    to="/"
                    class="group/cta inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-border-light text-text-muted text-sm transition-all duration-300 hover:text-text hover:border-white/20 hover:bg-white/[0.04] active:scale-[0.97]"
                  >
                    <Icon name="lucide:arrow-left" class="w-4 h-4 transition-transform duration-300 group-hover/cta:-translate-x-0.5" />
                    Back to Portfolio
                  </NuxtLink>
                </div>
              </div>
            </div>

            <!-- Footer -->
            <div class="mt-8 pt-4 border-t border-white/5 text-center text-text-muted2 text-sm font-mono">
              <p>Portfolio v1.0.0 — 2026 — siplhes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="min-h-screen flex items-center justify-center">
    <div class="terminal-window max-w-md mx-4">
      <div class="terminal-body text-center">
        <div class="text-text-muted text-4xl mb-4">!</div>
        <p class="text-text-muted font-mono">ERROR: Project not found</p>
        <NuxtLink to="/" class="btn btn-outline mt-4 inline-block text-sm">
          cd ..
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from "vue";
import { usePortfolioData } from "~/composables/usePortfolioData";
import { useTechData } from "~/composables/useTechData";
import { useIsAdmin } from "~/composables/useIsAdmin";

const route = useRoute();
const { projects: projectsData, loadAll } = usePortfolioData();
const { getTechBySlug } = useTechData();
const { isAdmin } = useIsAdmin();
const siteUrl = useRuntimeConfig().public.siteUrl;

onMounted(() => {
  loadAll();
});

const project = computed(() => {
  if (!projectsData.value) return null;
  const p = projectsData.value[route.params.slug as string];
  if (!p) return null;
  return { ...p, slug: route.params.slug as string, techs: p.techs || [] };
});

const heroImage = computed(() => {
  const p = project.value;
  if (!p) return "";
  const idx = p.primaryImageIndex ?? 0;
  return p.images?.[idx] || p.logo?.src || "";
});

function resolveTechSlug(slug: string): string {
  return getTechBySlug(slug)?.label || slug;
}

useSeoMeta({
  title: computed(() => (project.value?.seoTitle as string) || `${project.value?.title || 'Project'} — Joseph Hurtado`),
  ogTitle: computed(() => (project.value?.seoTitle as string) || project.value?.title || 'Project'),
  description: computed(() => project.value?.purpose || project.value?.description || `Project developed by Joseph Hurtado — ${project.value?.title || ''}`),
  ogDescription: computed(() => project.value?.purpose || project.value?.description || `Project developed by Joseph Hurtado — ${project.value?.title || ''}`),
  ogImage: computed(() => heroImage.value || 'https://i.imgur.com/ZhPz5xP.png'),
  ogUrl: computed(() => `${siteUrl}/project/${route.params.slug}`),
  twitterCard: "summary_large_image",
});

useHead({
  script: computed(() => [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        name: project.value?.title || '',
        description: project.value?.purpose || project.value?.description || '',
        url: project.value?.url || `${siteUrl}/project/${route.params.slug}`,
        image: heroImage.value || undefined,
        author: {
          "@type": "Person",
          name: "Joseph Hurtado",
          url: siteUrl,
        },
        keywords: project.value?.techs?.join(', ') || undefined,
        dateCreated: undefined,
      }),
    },
  ]),
});
</script>

<style scoped>
.project-image {
  @apply col-span-1 object-cover rounded-md h-80;
}
</style>

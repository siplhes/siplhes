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

        <!-- Man page header -->
        <div class="terminal-window">
          <div class="terminal-header">
            <span class="terminal-dot close"></span>
            <span class="terminal-dot minimize"></span>
            <span class="terminal-dot maximize"></span>
            <span class="terminal-title">man {{ project.slug || route.params.slug }}</span>
          </div>
          <div class="terminal-body">
            <!-- Man page name -->
            <div class="man-header">
              <h1 class="text-xl md:text-2xl font-bold text-white mb-1 font-mono">
                {{ $t(`${project.i18nKey}.title`) }}
              </h1>
              <p class="text-text-muted2 text-sm font-mono">
                {{ project.i18nKey.toUpperCase() }}(1) — Full Stack Project
              </p>
            </div>

            <!-- Project image/logo -->
            <div class="flex justify-center mb-8">
              <NuxtImg
                v-if="project.logo.type === 'image'"
                :src="project.logo.src"
                :class="project.logo.className"
                alt="Project logo"
              />
              <component
                v-else
                :is="project.logo.component"
                :class="project.logo.className"
              />
            </div>

            <!-- Man page sections -->
            <div class="space-y-8">
              <!-- NAME -->
              <div class="man-section">
                <h2 class="man-section-title">NAME</h2>
                <p class="man-section-text">
                  <span class="man-flag">{{ $t(`${project.i18nKey}.title`) }}</span>
                  — {{ $t(`${project.i18nKey}.description`) }}
                </p>
              </div>

              <!-- SYNOPSIS -->
              <div class="man-section">
                <h2 class="man-section-title">SYNOPSIS</h2>
                <div class="man-section-text font-mono text-sm bg-surface2/50 p-4 rounded border border-border">
                  <div class="text-white-dim">$ ./project --info {{ project.i18nKey }}</div>
                  <div class="text-text-muted mt-1">{{ $t(`${project.i18nKey}.title`) }} — {{ $t(`${project.i18nKey}.duration`) }}</div>
                </div>
              </div>

              <!-- DESCRIPTION -->
              <div class="man-section">
                <h2 class="man-section-title">DESCRIPTION</h2>
                <p class="man-section-text">{{ $t(`${project.i18nKey}.purpose`) }}</p>
                <p class="man-section-text">{{ $t(`${project.i18nKey}.objective`) }}</p>
              </div>

              <!-- APPROACH -->
              <div class="man-section">
                <h2 class="man-section-title">APPROACH</h2>
                <p class="man-section-text">{{ $t(`${project.i18nKey}.approach`) }}</p>
              </div>

              <!-- TECHNOLOGIES -->
              <div class="man-section">
                <h2 class="man-section-title">TECHNOLOGIES</h2>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="(tech, ti) in project.techs"
                    :key="ti"
                    class="tech-tag"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>

              <!-- ROLE -->
              <div class="man-section">
                <h2 class="man-section-title">ROLE</h2>
                <p class="man-section-text">{{ $t(`${project.i18nKey}.role`) }}</p>
              </div>

              <!-- DURATION -->
              <div class="man-section">
                <h2 class="man-section-title">DURATION</h2>
                <p class="man-section-text">{{ $t(`${project.i18nKey}.duration`) }}</p>
              </div>

              <!-- CHARACTERISTICS -->
              <div v-if="project.hasCharacteristics" class="man-section">
                <h2 class="man-section-title">FEATURES</h2>
                <ul class="list-none space-y-1">
                  <li
                    v-for="(_, idx) in 3"
                    :key="idx"
                    class="man-section-text flex items-start gap-2"
                  >
                    <span class="text-white-muted mt-1">•</span>
                    <span>{{ $t(`${project.i18nKey}.characteristics.item${idx + 1}`) }}</span>
                  </li>
                </ul>
              </div>

              <!-- FUTURE ENHANCEMENTS -->
              <div class="man-section">
                <h2 class="man-section-title">FUTURE ENHANCEMENTS</h2>
                <ul class="list-none space-y-1">
                  <li
                    v-for="(_, idx) in 7"
                    :key="idx"
                    class="man-section-text flex items-start gap-2"
                  >
                    <span class="text-text-muted mt-1">○</span>
                    <span>{{ $t(`${project.i18nKey}.future_enhancements.item${idx + 1}`) }}</span>
                  </li>
                </ul>
              </div>

              <!-- FINAL PRODUCT -->
              <div class="man-section">
                <h2 class="man-section-title">FINAL PRODUCT</h2>
                <div class="space-y-4">
                  <div
                    v-for="(image, idx) in project.images"
                    :key="idx"
                    class="border border-white/5 rounded-lg overflow-hidden"
                  >
                    <NuxtImg
                      :src="image"
                      class="w-full object-cover"
                      alt="Project screenshot"
                    />
                  </div>
                </div>
              </div>

              <!-- SEE ALSO -->
              <div class="man-section">
                <h2 class="man-section-title">SEE ALSO</h2>
                <div class="flex flex-wrap gap-3">
                  <NuxtLink
                    :to="project.url"
                    target="_blank"
                    class="btn btn-outline text-sm"
                  >
                    <Icon name="uil:external-link-alt" class="w-4 h-4 mr-1" />
                    Live Project
                  </NuxtLink>
                  <NuxtLink
                    to="/"
                    class="btn btn-ghost text-sm"
                  >
                    <Icon name="uil:arrow-left" class="w-4 h-4 mr-1" />
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

<script setup>
const route = useRoute();
const { getProjectBySlug } = await import("~/data/projects");

const project = computed(() => {
  const p = getProjectBySlug(route.params.slug);
  if (p) {
    return { ...p, slug: route.params.slug, techs: p.techs || [] };
  }
  return null;
});

useSeoMeta({
  title: computed(() => project.value?.seoTitle || "Project — Joseph Hurtado"),
  ogTitle: computed(() => project.value?.seoTitle || "Project"),
  description: computed(() => `Project developed by Joseph Hurtado — ${project.value?.i18nKey || ""}`),
  ogDescription: computed(() => `Project developed by Joseph Hurtado`),
  ogImage: "https://example.com/image.png",
  twitterCard: "summary_large_image",
});
</script>

<style scoped>
.project-image {
  @apply col-span-1 object-cover rounded-md h-80;
}
</style>

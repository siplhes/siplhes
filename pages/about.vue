<template>
  <div class="min-h-screen py-8 md:py-12">
    <div class="container">
      <div class="max-w-3xl mx-auto">
        <!-- Back link -->
        <div class="mb-6">
          <NuxtLink
            to="/"
            class="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-text transition-colors"
          >
            <Icon name="lucide:arrow-left" class="w-3.5 h-3.5" />
            <span class="font-mono">cd ..</span>
          </NuxtLink>
        </div>

        <!-- About bento card -->
        <div class="bento-card-static">
          <!-- Header -->
          <div class="flex items-center gap-4 mb-6 pb-5 border-b border-border">
            <div class="relative shrink-0">
              <div class="absolute -inset-0.5 bg-white/5 rounded-xl blur-sm"></div>
              <NuxtImg
                class="relative w-14 h-14 rounded-xl object-cover border border-border-light"
                src="https://i.imgur.com/ZhPz5xP.png"
                alt="Joseph Hurtado"
              />
            </div>
            <div>
              <h1 class="text-lg font-bold text-white">Joseph Hurtado</h1>
              <p class="text-sm text-text-muted font-mono">Full Stack Developer</p>
            </div>
          </div>

          <!-- Content -->
          <div class="space-y-6">
            <!-- About text -->
            <div class="space-y-3 text-sm text-text/80 leading-relaxed">
              <p>
                Full Stack Developer with 7+ years of experience building web applications.
                Over 3 years building with <span class="text-white font-medium">Laravel</span>
                and in love with <span class="text-white font-medium">Vue.js</span> for 2+ years.
              </p>
              <p>
                I specialize in crafting clean, efficient, and user-friendly applications
                using modern JavaScript/TypeScript ecosystems. I believe in writing code
                that is maintainable, testable, and a pleasure to work with.
              </p>
            </div>

            <!-- Divider -->
            <div class="h-px bg-border"></div>

            <!-- Skills breakdown -->
            <div>
              <h2 class="text-xs font-mono uppercase tracking-widest text-text-muted2 mb-3">Specialties</h2>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div v-for="(group, gi) in skillGroups" :key="gi" class="space-y-1.5">
                  <h3 class="text-xs font-mono text-text-muted2">{{ group.label }}</h3>
                  <div class="flex flex-wrap gap-1.5">
                    <span v-for="(item, ii) in group.items" :key="ii" class="tech-tag text-[11px] py-1">
                      {{ item }}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Divider -->
            <div class="h-px bg-border"></div>

            <!-- Status -->
            <div class="flex items-center gap-4 text-sm">
              <div class="flex items-center gap-2">
                <span class="status-dot"></span>
                <span class="text-green/80 font-mono text-xs">Available for freelance & collaboration</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Navigation footer -->
        <div class="mt-6 flex items-center justify-center gap-4 text-xs text-text-muted2 font-mono">
          <NuxtLink to="/" class="hover:text-text-muted transition-colors">Home</NuxtLink>
          <span class="w-px h-3 bg-border-light"></span>
          <NuxtLink to="/cv" target="_blank" class="hover:text-text-muted transition-colors">CV</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "About — Joseph Hurtado",
  meta: [{ name: "description", content: "About Joseph Hurtado - Full Stack Developer" }],
});

const skillGroups = [
  {
    label: "Frontend",
    items: ["Vue.js", "Nuxt.js", "TailwindCSS", "Inertia.js", "Alpine.js"],
  },
  {
    label: "Backend",
    items: ["Laravel", "Node.js", "Express", "Fastify", "PHP"],
  },
  {
    label: "Database",
    items: ["MySQL", "PostgreSQL", "Firebase RTDB"],
  },
  {
    label: "Design & Tools",
    items: ["Figma", "UI/UX", "Git", "Docker", "AWS"],
  },
];
</script>

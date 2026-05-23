<template>
  <div class="h-full">
    <div class="terminal-window h-full">
      <div class="terminal-header">
        <span class="terminal-dot close"></span>
        <span class="terminal-dot minimize"></span>
        <span class="terminal-dot maximize"></span>
        <span class="terminal-title">~/tech-stack.sh</span>
      </div>
      <div class="terminal-body">
        <div class="prompt-line mb-2">
          <span class="prompt-symbol"></span>
          <span class="text-text-muted text-sm">./tech-stack.sh --list</span>
        </div>

        <div class="font-mono text-sm leading-relaxed">
          <div class="text-white-dim mb-1">npm list --depth=0</div>
          <div class="text-text-muted2 mb-2 text-xs">siplhes@portfolio /home/siplhes/stack</div>

          <div class="space-y-0.5">
            <div
              v-for="(skill, index) in sortedSkills"
              :key="index"
              class="flex items-center gap-2 px-1 py-0.5 rounded hover:bg-white/5 transition-colors"
            >
              <span class="text-white-muted shrink-0 w-5 text-right text-xs">
                {{ index === sortedSkills.length - 1 ? '└──' : '├──' }}
              </span>
              <span class="text-text">{{ skill }}</span>
              <span class="text-text-muted2 text-xs">@{{ getYears(skill) }}</span>
            </div>
          </div>

          <div class="mt-2 pt-2 border-t border-white/5">
            <div class="flex items-center gap-1 text-text-muted2 text-xs">
              <span class="text-white-dim">───</span>
              {{ sortedSkills.length }} packages installed
              <span class="text-white-dim">───</span>
            </div>
            <div class="text-text-muted2 text-xs mt-0.5">
              <span class="text-white-muted">◆</span> Last updated: 2026
              <span class="text-white-muted ml-2">◆</span> License: MIT
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const skills = [
  "JavaScript", "Vue.js", "Inertia.js", "Nuxt.js", "Node.js",
  "Express", "HTML", "CSS", "SCSS", "Bootstrap",
  "TailwindCSS", "MySQL", "Laravel", "Postgres", "Figma", "Fastify", "PHP",
];

const sortedSkills = computed(() => [...skills].sort());

// Skill → year mapping for the @yr display
const yearMap = {
  "JavaScript": "7yr",
  "HTML": "7yr",
  "CSS": "7yr",
  "PHP": "5yr",
  "MySQL": "5yr",
  "Laravel": "4yr",
  "Vue.js": "3yr",
  "Express": "3yr",
  "SCSS": "4yr",
  "Bootstrap": "4yr",
  "Node.js": "5yr",
  "Nuxt.js": "3yr",
  "TailwindCSS": "3yr",
  "Postgres": "2yr",
  "Figma": "3yr",
  "Fastify": "2yr",
  "Inertia.js": "2yr",
};

function getYears(skill) {
  return yearMap[skill] || "2yr";
}
</script>

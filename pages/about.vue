<template>
  <div class="min-h-screen py-12">
    <div class="container">
      <!-- Back link -->
      <div class="mb-6">
        <NuxtLink
          to="/"
          class="inline-flex items-center gap-1 text-text-muted hover:text-white transition-colors font-mono text-sm"
        >
          <span class="text-white-muted">$</span>
          <span>cd .. &amp;&amp; ls -la</span>
          <span class="text-text-muted2 text-xs ml-1"># back to index</span>
        </NuxtLink>
      </div>

      <div class="terminal-window max-w-3xl mx-auto">
        <div class="terminal-header">
          <span class="terminal-dot close"></span>
          <span class="terminal-dot minimize"></span>
          <span class="terminal-dot maximize"></span>
          <span class="terminal-title">~/about.sh</span>
        </div>
        <div class="terminal-body">
          <div class="prompt-line mb-6">
            <span class="prompt-symbol"></span>
            <span class="text-text-muted">cat ./about.md</span>
          </div>

          <div class="font-mono text-base space-y-6">
            <!-- Terminal cat output -->
            <div class="bg-surface2/40 p-4 rounded border border-border text-text/80 leading-relaxed whitespace-pre-line">
              <span class="text-white-dim"># Joseph Hurtado</span>

              Full Stack Developer with 7+ years of experience building web applications.

              Over 3 years building with <span class="text-text-muted">Laravel</span> and in love with <span class="text-white-dim">Vue.js</span> for 2+ years.

              I specialize in crafting clean, efficient, and user-friendly applications 
              using modern JavaScript/TypeScript ecosystems.

              <span class="text-text-muted2">---</span>
              <span class="text-white-dim">$</span> <span class="text-text-muted">what-i-do --specialties</span>

              <span class="text-text-muted">◆</span> Frontend: Vue.js, Nuxt.js, TailwindCSS, Inertia.js
              <span class="text-text-muted">◆</span> Backend:  Node.js, Express, Fastify, Laravel, PHP
              <span class="text-text-muted">◆</span> Database: MySQL, PostgreSQL, Firebase RTDB
              <span class="text-text-muted">◆</span> Design:   Figma, UI/UX, Responsive Web

              <span class="text-text-muted2">---</span>
              <span class="text-white-dim">$</span> <span class="text-text-muted">check-status --uptime</span>

              <span class="text-white-dim">●</span> Currently: Open to freelance & collaboration
              <span class="text-text-muted2">○</span> Learning: Advanced Nuxt patterns & cloud architecture
            </div>
          </div>

          <div class="mt-6 pt-4 border-t border-white/5 text-center text-text-muted2 text-sm">
            <NuxtLink to="/" class="text-white-dim hover:underline">cd ~/portfolio</NuxtLink>
            <span class="mx-2">|</span>
            <NuxtLink to="/cv" target="_blank" class="text-white-dim hover:underline">cat ./cv.pdf</NuxtLink>
          </div>
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
</script>

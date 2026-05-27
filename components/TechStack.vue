<template>
  <div class="group/card">
    <div class="section-label stagger-item" :style="{ '--item-index': 0 }">Tech Stack</div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 stagger-item" :style="{ '--item-index': 1 }">
      <div
        v-for="(category, ci) in techCategories"
        :key="ci"
        class="group/category rounded-xl p-3 -mx-1 transition-all duration-300 hover:bg-white/[0.02] hover:-translate-y-0.5"
      >
        <h4 class="text-xs font-mono text-text-muted2 uppercase tracking-widest mb-2.5 transition-all duration-300 group-hover/category:text-text-muted">
          {{ category.label }}
        </h4>
        <div class="flex flex-wrap gap-1.5">
          <span
            v-for="(tech, ti) in category.items"
            :key="ti"
            class="tech-tag transition-all duration-200 hover:scale-105 hover:-translate-y-0.5 hover:bg-white/[0.08] hover:border-white/20 hover:text-text/90 cursor-default"
            :style="{ transitionDelay: `${ti * 30}ms` }"
          >
            {{ tech }}
          </span>
        </div>
      </div>
    </div>

    <!-- Experience bar -->
    <div class="mt-5 pt-4 border-t border-border stagger-item" :style="{ '--item-index': 2 }">
      <div class="flex items-center justify-between text-xs text-text-muted2 font-mono">
        <span class="transition-colors duration-300 hover:text-text-muted">Primary stack</span>
        <span class="text-text-muted transition-all duration-300 hover:text-white hover:tracking-wider">7+ years experience</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const techCategories = [
  {
    label: "Frontend",
    items: ["Vue.js", "Nuxt", "Inertia.js", "Tailwind CSS", "Alpine.js"],
  },
  {
    label: "Backend",
    items: ["Laravel", "Node.js", "Express", "Fastify", "PHP"],
  },
  {
    label: "Database",
    items: ["MySQL", "PostgreSQL", "Firebase", "MongoDB"],
  },
  {
    label: "Tools",
    items: ["Git", "Docker", "AWS", "Figma", "Stripe"],
  },
];
</script>

<template>
  <div class="group/card">
    <div class="section-label stagger-item" :style="{ '--item-index': 0 }">Tech Stack</div>

    <div v-if="techCategories.length" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 stagger-item relative" :style="{ '--item-index': 1 }">
      <div
        v-for="(category, ci) in techCategories"
        :key="ci"
        class="group/category rounded-xl p-3 -mx-1 transition-all duration-300 hover:bg-white/[0.02] hover:-translate-y-0.5"
      >
        <h4 class="text-xs font-mono text-text-muted2 uppercase tracking-widest mb-2.5 transition-all duration-300 group-hover/category:text-text-muted">
          {{ category.label }}
        </h4>
        <div class="flex flex-wrap gap-1.5">
          <TechTag
            v-for="(item, ti) in category.items"
            :key="ti"
            :slug="item.slug"
            :label="item.label"
            :style="{ transitionDelay: `${ti * 30}ms` }"
            size="sm"
          />
        </div>
      </div>
    </div>

    <div v-else class="text-text-muted2 text-sm font-mono text-center py-8">
      Loading tech stack...
    </div>

    <div class="mt-5 pt-4 border-t border-border stagger-item" :style="{ '--item-index': 2 }">
      <div class="flex items-center justify-between text-xs text-text-muted2 font-mono">
        <span class="transition-colors duration-300 hover:text-text-muted">Primary stack</span>
        <span class="text-text-muted transition-all duration-300 hover:text-white hover:tracking-wider">7+ years experience</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useTechData } from "~/composables/useTechData";

const { normalizedTech } = useTechData();

const techCategories = computed(() => normalizedTech.value?.categories || []);
</script>

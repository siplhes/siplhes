<template>
  <div class="h-full flex flex-col group/card">
    <!-- Profile Section -->
    <div class="flex items-start gap-5 mb-5">
      <!-- Profile Image with hover scale and glow -->
      <div class="shrink-0">
        <div class="relative transition-transform duration-500 ease-out group-hover/card:scale-[1.02]">
          <div class="absolute -inset-0.5 bg-white/5 rounded-2xl blur-sm transition-all duration-500 group-hover/card:bg-white/10 group-hover/card:blur-md"></div>
          <NuxtImg
            class="relative w-20 h-20 md:w-24 md:h-24 rounded-xl object-cover border border-border-light transition-all duration-500 group-hover/card:border-white/20"
            src="https://i.imgur.com/ZhPz5xP.png"
            alt="Joseph Hurtado"
          />
        </div>
      </div>

      <!-- Name & Title -->
      <div class="min-w-0 flex-1 pt-1">
        <h1 class="text-xl md:text-2xl font-bold text-white tracking-tight transition-all duration-300 group-hover/card:tracking-[-0.02em]">
          Joseph Hurtado
        </h1>
        <p class="text-sm text-text-muted mt-0.5 font-mono stagger-item" :style="{ '--item-index': 0 }">
          <span class="text-text-muted2">@</span>siplhes
        </p>
        <div class="flex items-center gap-2 mt-2 stagger-item" :style="{ '--item-index': 1 }">
          <span class="status-dot group-hover/card:shadow-[0_0_8px_rgba(48,209,88,0.6)] transition-shadow duration-500"></span>
          <span class="text-xs text-green/80 font-mono">Available for work</span>
        </div>
      </div>
    </div>

    <!-- Bio -->
    <div class="space-y-3 mb-5 flex-1">
      <p class="text-sm text-text/80 leading-relaxed stagger-item" :style="{ '--item-index': 2 }">
        {{ t('description') }}
      </p>
    </div>

    <!-- Quick Stats with hover effects on each stat -->
    <div class="grid grid-cols-3 gap-3 pt-4 border-t border-border">
      <div class="text-center py-2 rounded-xl transition-all duration-300 hover:bg-white/[0.03] cursor-default group/stat">
        <div class="text-lg font-bold text-white transition-all duration-300 group-hover/stat:scale-110 group-hover/stat:text-white">
          7+
        </div>
        <div class="text-xs text-text-muted2 font-mono mt-0.5 transition-colors duration-300 group-hover/stat:text-text-muted">
          Years
        </div>
      </div>
      <div class="text-center py-2 rounded-xl transition-all duration-300 hover:bg-white/[0.03] cursor-default group/stat">
        <div class="text-lg font-bold text-white transition-all duration-300 group-hover/stat:scale-110 group-hover/stat:text-white">
          4
        </div>
        <div class="text-xs text-text-muted2 font-mono mt-0.5 transition-colors duration-300 group-hover/stat:text-text-muted">
          Projects
        </div>
      </div>
      <div class="text-center py-2 rounded-xl transition-all duration-300 hover:bg-white/[0.03] cursor-default group/stat">
        <div class="text-lg font-bold text-white transition-all duration-300 group-hover/stat:scale-110 group-hover/stat:text-white">
          ∞
        </div>
        <div class="text-xs text-text-muted2 font-mono mt-0.5 transition-colors duration-300 group-hover/stat:text-text-muted">
          Coffee
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();
</script>

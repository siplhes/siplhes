<script setup lang="ts">
import LangChanger from "./LangChanger.vue";
import ThemeChanger from "./ThemeChanger.vue";
import { useCursorBlink } from "~/composables/useTerminal";

const cursor = useCursorBlink(true);
</script>

<template>
  <nav class="nav-terminal sticky top-0 z-50 bg-background/90 backdrop-blur-md">
    <div class="container">
      <div class="flex items-center justify-between h-14">
        <!-- Terminal prompt on left -->
        <div class="flex items-center gap-1.5 font-mono text-sm">
          <span class="text-text-muted">[</span>
          <span class="text-white font-bold">siplhes</span>
          <span class="text-text-muted">@</span>
          <span class="text-text-muted2">portfolio</span>
          <span class="text-text-muted">]</span>
          <span class="text-text-muted2">~</span>
          <span class="text-white">$</span>
          <NuxtLink to="/" class="ml-1 text-text-muted hover:text-white transition-colors">
            {{ $t("nav_title") }}
          </NuxtLink>
          <span
            class="inline-block w-[6px] h-[15px] bg-white ml-1"
            :class="{ 'opacity-0': !cursor.visible.value }"
          ></span>
        </div>

        <!-- Nav links + controls on right -->
        <div class="flex items-center gap-1">
          <NuxtLink to="/About" class="nav-link">
            About
          </NuxtLink>
          <NuxtLink to="/cv" target="_blank" class="nav-link">
            {{ $t("my_cv") }}
          </NuxtLink>
          <div class="w-px h-5 bg-border mx-1"></div>
          <LangChanger />
          <ThemeChanger />
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.nav-link {
  font-family: 'JetBrains Mono', 'Fira Code', Consolas, Monaco, monospace;
}
</style>

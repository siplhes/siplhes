<script setup lang="ts">
import LangChanger from "./LangChanger.vue";
import ThemeChanger from "./ThemeChanger.vue";
</script>

<template>
  <nav class="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
    <div class="container">
      <div class="flex items-center justify-between h-16">
        <NuxtLink to="/" class="text-xl font-bold text-text hover:opacity-90 transition-opacity">
          {{ $t("nav_title") }}
        </NuxtLink>
        
        <div class="flex items-center gap-2">
          <NuxtLink
            to="/cv"
            target="_blank"
            class="nav-link"
          >
            {{ $t("my_cv") }}
          </NuxtLink>
          <NuxtLink to="/About" class="nav-link">
            About
          </NuxtLink>
          <div class="w-px h-6 bg-border mx-2"></div>
          <LangChanger />
          <ThemeChanger />
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
</style>
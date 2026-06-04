<script setup lang="ts">
import { useIsAdmin } from "~/composables/useIsAdmin";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
];

const { isAdmin } = useIsAdmin();
</script>

<template>
  <nav class="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
    <div class="container">
      <div class="flex items-center justify-between h-14">
        <!-- Logo / Brand -->
        <NuxtLink to="/" class="flex items-center gap-2 group">
          <span class="font-mono text-sm font-bold text-white tracking-tight">siplhes</span>
          <span class="hidden sm:inline-block text-xs text-text-muted2 font-mono">~ $</span>
          <span class="inline-block w-[5px] h-3.5 bg-white/70 animate-cursor-blink"></span>
        </NuxtLink>

        <!-- Nav links + controls -->
        <div class="flex items-center gap-1">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            class="relative px-3 py-1.5 text-sm text-text-muted hover:text-text transition-colors font-mono"
            :class="{ 'text-text': $route.path === link.path }"
          >
            {{ link.label }}
            <span
              v-if="$route.path === link.path"
              class="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-white/40 rounded-full"
            ></span>
          </NuxtLink>

          <NuxtLink
            to="/cv"
            target="_blank"
            class="ml-1 px-3 py-1.5 text-sm text-text-muted hover:text-text transition-colors font-mono"
          >
            CV
          </NuxtLink>

          <!-- Admin indicator -->
          <NuxtLink
            v-if="isAdmin"
            to="/admin"
            class="ml-1 px-2 py-1 text-[10px] font-mono rounded border border-green/20 text-green/70 hover:bg-green/5 hover:text-green transition-all"
          >
            <Icon name="lucide:shield" class="w-3 h-3 inline-block mr-0.5 align-[-2px]" />
            admin
          </NuxtLink>
        </div>
      </div>
    </div>
  </nav>
</template>

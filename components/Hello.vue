<template>
  <div class="h-full">
    <div class="terminal-window h-full">
      <div class="terminal-header">
        <span class="terminal-dot close"></span>
        <span class="terminal-dot minimize"></span>
        <span class="terminal-dot maximize"></span>
        <span class="terminal-title">~/hello.sh</span>
      </div>
      <div class="terminal-body flex flex-col md:flex-row items-center gap-4 md:gap-6">
        <!-- Profile image -->
        <div class="shrink-0">
          <div class="relative group">
            <div class="absolute -inset-1 bg-white/5 rounded-full blur-md group-hover:bg-white/10 transition-all duration-500"></div>
            <div class="relative">
              <NuxtImg
                class="relative w-28 h-28 md:w-36 md:h-36 rounded-full object-cover border border-white/10"
                src="https://i.imgur.com/ZhPz5xP.png"
                alt="Joseph Hurtado"
              />
              <div class="absolute -top-2 -left-2 text-white-muted font-mono text-xs">┌</div>
              <div class="absolute -top-2 -right-2 text-white-muted font-mono text-xs">┐</div>
              <div class="absolute -bottom-2 -left-2 text-white-muted font-mono text-xs">└</div>
              <div class="absolute -bottom-2 -right-2 text-white-muted font-mono text-xs">┘</div>
            </div>
          </div>
        </div>

        <!-- Terminal content -->
        <div class="flex-1 min-w-0">
          <div class="prompt-line mb-2">
            <span class="prompt-symbol"></span>
            <span class="text-text-muted text-sm">./hello.sh</span>
          </div>

          <pre class="ascii-banner mb-2">{{ ASCII_BANNER }}</pre>
          <div class="text-text text-sm font-mono leading-relaxed">
            <div class="prompt-line">
              <span class="prompt-symbol"></span>
              <span class="text-text-muted text-sm">cat ./whoami.txt</span>
            </div>
            <div class="ml-5 mt-0.5 text-text/90 text-sm">
              > <span class="text-white font-bold">Joseph Hurtado</span>
            </div>
            <div class="ml-5 mt-0.5 text-text-muted text-sm">
              {{ $t("description") }}
            </div>
          </div>

          <div class="mt-2 pt-2 border-t border-white/5">
            <div class="prompt-line">
              <span class="prompt-symbol"></span>
              <span class="text-text-muted text-sm">systemctl status portfolio</span>
            </div>
            <div class="ml-5 text-xs text-white-muted">● portfolio.service — Personal Portfolio System</div>
            <div class="ml-5 text-xs text-white-muted">
              <span class="text-white-dim">Loaded:</span> loaded
              <span class="text-text-muted2 ml-1">●</span>
              <span class="text-white-dim">Active:</span> active (running)
              <span class="text-text-muted2 ml-1">●</span>
              <span class="text-white-dim">Uptime:</span> 7+ years
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ASCII_BANNER, useCursorBlink } from "~/composables/useTerminal";

const cursor = useCursorBlink(true);
</script>

<style scoped>
.ascii-banner {
  font-size: clamp(0.45rem, 1.5vw, 0.8rem);
  line-height: 1.1;
}
</style>

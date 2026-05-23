<template>
  <main>
    <!-- Boot Screen Overlay -->
    <Transition name="boot-fade">
      <div v-if="boot.isBooting.value" class="boot-screen">
        <div class="boot-content">
          <pre class="ascii-banner text-center mb-8">{{ ASCII_BANNER }}</pre>
          <div class="boot-message text-center">
            <span>{{ boot.currentMessage.value }}</span>
            <span class="typewriter-cursor align-middle ml-1"></span>
          </div>
          <div class="boot-progress-bar">
            <div
              class="boot-progress-fill"
              :style="{ width: boot.bootProgress.value + '%' }"
            ></div>
          </div>
          <div class="boot-status text-center">
            {{ boot.bootProgress.value }}% — v1.0.0
          </div>
        </div>
      </div>
    </Transition>

    <!-- CRT Overlay (always visible) -->
    <div class="crt-overlay"></div>

    <!-- Main Content -->
    <Nav />
    <NuxtPage />
  </main>
</template>

<script setup lang="ts">
import { ASCII_BANNER, useBootSequence } from '~/composables/useTerminal';

const boot = useBootSequence();

onMounted(() => {
  boot.start();
});
</script>

<style lang="scss">
@use "~/assets/scss/main.scss";

.boot-fade-enter-active,
.boot-fade-leave-active {
  transition: opacity 0.6s ease, filter 0.6s ease;
}

.boot-fade-enter-from {
  opacity: 0;
}

.boot-fade-leave-to {
  opacity: 0;
  filter: blur(4px);
}
</style>

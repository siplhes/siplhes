<template>
  <div class="admin-screen">
    <div class="terminal-window">
      <div class="terminal-header">
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="terminal-title">{{ terminalTitle }}</span>
        <slot name="header-right" />
      </div>
      <div class="terminal-body">
        <div class="prompt-line">
          <span class="prompt">$</span>
          <span class="text-muted">{{ command }}</span>
        </div>

        <NuxtLink v-if="backTo" :to="backTo" class="back-link">cd ..</NuxtLink>

        <div v-if="loading" class="loading-text">Loading...</div>

        <slot v-else name="body" />

        <div v-if="message" class="msg" :class="{ error: isError }">{{ message }}</div>

        <div v-if="$slots.actions" class="actions">
          <slot name="actions" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  terminalTitle?: string
  command?: string
  backTo?: string
  loading?: boolean
  message?: string
  isError?: boolean
}>()
</script>

<style scoped>
.admin-screen {
  min-height: 100vh;
  background: #0a0a0a;
  padding: 2rem 1rem;
  display: flex;
  justify-content: center;
}

.terminal-window {
  width: 100%;
  max-width: 700px;
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 8px;
  overflow: hidden;
  background: rgba(10, 10, 10, 0.95);
  align-self: flex-start;
}

.terminal-header {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 10px 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
  background: rgba(0, 0, 0, 0.3);
  position: relative;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.15);
}

.terminal-title {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.2);
  font-family: 'JetBrains Mono', 'Fira Code', Consolas, Monaco, monospace;
  white-space: nowrap;
}

.terminal-body {
  padding: 1.5rem;
  font-family: 'JetBrains Mono', 'Fira Code', Consolas, Monaco, monospace;
}

.prompt-line {
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 8px;
}

.prompt {
  color: rgba(255, 255, 255, 0.4);
  font-weight: bold;
  flex-shrink: 0;
}

.text-muted {
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.8rem;
}

.loading-text {
  color: rgba(255, 255, 255, 0.3);
  font-size: 0.8rem;
}

.back-link {
  display: inline-block;
  margin-bottom: 1rem;
  color: rgba(255, 255, 255, 0.3);
  text-decoration: none;
  font-size: 0.75rem;
}

.back-link:hover {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: underline;
}

.msg {
  font-size: 0.75rem;
  color: rgba(100, 255, 100, 0.7);
  padding: 4px 0;
  margin-top: 0.5rem;
}

.msg.error {
  color: rgba(255, 100, 100, 0.7);
}

.actions {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 1rem;
}
</style>

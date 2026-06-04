<template>
  <div class="preview-wrapper">
    <div class="preview-header">
      <span class="prompt">$</span>
      <span class="preview-label">{{ label || 'Preview' }}</span>
    </div>
    <div class="preview-frame">
      <img
        v-if="src && src.trim()"
        :src="src"
        :alt="label || 'preview'"
        class="preview-img"
        @error="errored = true"
        @load="errored = false"
      />
      <div v-else-if="errored || !src" class="preview-placeholder">
        <span v-if="errored" class="preview-error">! failed to load</span>
        <span v-else class="preview-empty">empty</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue"

const props = defineProps<{
  src: string
  label?: string
}>()

const errored = ref(false)

watch(() => props.src, () => {
  errored.value = false
})
</script>

<style scoped>
.preview-wrapper {
  margin-top: 4px;
}

.preview-header {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 4px;
}

.prompt {
  color: rgba(255, 255, 255, 0.4);
  font-weight: bold;
  font-size: 0.7rem;
}

.preview-label {
  color: rgba(255, 255, 255, 0.25);
  font-size: 0.65rem;
}

.preview-frame {
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 4px;
  overflow: hidden;
  background: #080808;
  max-height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.preview-img {
  max-width: 100%;
  max-height: 180px;
  object-fit: contain;
  display: block;
}

.preview-placeholder {
  padding: 1.5rem;
  text-align: center;
  font-family: 'JetBrains Mono', 'Fira Code', Consolas, Monaco, monospace;
}

.preview-empty {
  color: rgba(255, 255, 255, 0.1);
  font-size: 0.65rem;
}

.preview-error {
  color: rgba(255, 100, 100, 0.4);
  font-size: 0.65rem;
}
</style>

<template>
  <div class="image-uploader">
    <!-- File picker row -->
    <div class="upload-row">
      <input
        ref="fileInputRef"
        type="file"
        accept="image/*"
        @change="handleFile"
        hidden
      />
      <button
        type="button"
        class="term-btn-small"
        :disabled="uploading"
        @click="fileInputRef?.click()"
      >
        <span class="prompt">$</span>
        {{ uploading ? "./upload --busy" : "./upload --file" }}
      </button>
      <input
        :value="modelValue"
        @input="emitUrl(($event.target as HTMLInputElement).value)"
        class="term-input"
        placeholder="https://... (or upload above)"
      />
      <button
        v-if="modelValue"
        type="button"
        class="term-btn-small clear-btn"
        @click="emitUrl('')"
      >
        x
      </button>
    </div>

    <!-- Upload progress -->
    <div v-if="uploading" class="upload-progress">
      <span class="upload-spinner">⟳</span>
      <span>Uploading to S3...</span>
    </div>

    <!-- Error -->
    <div v-if="error" class="upload-error">! {{ error }}</div>

    <!-- Preview -->
    <AdminImagePreview v-if="modelValue" :src="modelValue" :label="label" />
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    modelValue: string
    label?: string
  }>(),
  { label: "image" }
)

const emit = defineEmits<{
  "update:modelValue": [value: string]
}>()

const fileInputRef = ref<HTMLInputElement | null>(null)
const uploading = ref(false)
const error = ref("")

function emitUrl(url: string) {
  error.value = ""
  emit("update:modelValue", url)
}

async function handleFile(event: Event) {
  const input = event.target as HTMLInputElement
  const file = input.files?.[0]
  if (!file) return

  // Validate file type
  if (!file.type.startsWith("image/")) {
    error.value = "Only image files are allowed"
    return
  }

  // Validate file size (max 10MB)
  if (file.size > 10 * 1024 * 1024) {
    error.value = "File is too large (max 10MB)"
    return
  }

  uploading.value = true
  error.value = ""

  try {
    const formData = new FormData()
    formData.append("file", file)

    const res = await $fetch<{ url: string }>("/api/upload-image", {
      method: "POST",
      body: formData,
    })

    emitUrl(res.url)
  } catch (e: any) {
    error.value = e?.data?.statusMessage || e?.message || "Upload failed"
  } finally {
    uploading.value = false
    // Reset file input so re-selecting the same file works
    if (fileInputRef.value) fileInputRef.value.value = ""
  }
}
</script>

<style scoped>
.image-uploader {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.upload-row {
  display: flex;
  gap: 6px;
  align-items: stretch;
}

.upload-row .term-input {
  flex: 1;
  background: #111;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
  padding: 8px 12px;
  font-family: "JetBrains Mono", "Fira Code", Consolas, Monaco, monospace;
  font-size: 0.8rem;
  border-radius: 4px;
  outline: none;
  transition: border-color 0.2s;
}

.upload-row .term-input:focus {
  border-color: rgba(255, 255, 255, 0.3);
  color: #fff;
}

.term-btn-small {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.4);
  padding: 7px 12px;
  font-family: inherit;
  font-size: 0.75rem;
  border-radius: 3px;
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;
  flex-shrink: 0;
}

.term-btn-small:hover:not(:disabled) {
  border-color: rgba(255, 255, 255, 0.25);
  color: rgba(255, 255, 255, 0.7);
}

.term-btn-small:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.clear-btn {
  border-color: rgba(255, 100, 100, 0.15);
  color: rgba(255, 100, 100, 0.4);
}

.clear-btn:hover:not(:disabled) {
  border-color: rgba(255, 100, 100, 0.3);
  color: rgba(255, 100, 100, 0.7);
}

.upload-progress {
  display: flex;
  align-items: center;
  gap: 8px;
  color: rgba(255, 255, 255, 0.4);
  font-size: 0.7rem;
  font-family: "JetBrains Mono", "Fira Code", Consolas, Monaco, monospace;
}

.upload-spinner {
  animation: spin 1s linear infinite;
  display: inline-block;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.upload-error {
  color: rgba(255, 100, 100, 0.7);
  font-size: 0.65rem;
  font-family: "JetBrains Mono", "Fira Code", Consolas, Monaco, monospace;
}

.prompt {
  color: rgba(255, 255, 255, 0.4);
  font-weight: bold;
}
</style>

<template>
  <div class="tag-input-wrapper">
    <div class="tags-list">
      <span v-for="(tag, i) in modelValue" :key="i" class="tag-chip">
        <span class="tag-text">{{ tag }}</span>
        <button class="tag-remove" @click="removeTag(i)" type="button" title="Remove">&times;</button>
      </span>
      <input
        ref="inputEl"
        v-model="inputText"
        class="tag-input-field"
        :placeholder="modelValue.length === 0 ? placeholder : '...'"
        @keydown="onKeydown"
        @blur="commitInput"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"

const props = withDefaults(defineProps<{
  modelValue: string[]
  placeholder?: string
}>(), {
  placeholder: "Type and press Enter",
})

const emit = defineEmits<{
  'update:modelValue': [value: string[]]
}>()

const inputEl = ref<HTMLInputElement | null>(null)
const inputText = ref("")

function addTag() {
  const val = inputText.value.trim()
  if (!val) return
  if (props.modelValue.includes(val)) {
    inputText.value = ""
    return
  }
  emit("update:modelValue", [...props.modelValue, val])
  inputText.value = ""
}

function commitInput() {
  addTag()
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === "Enter" || e.key === ",") {
    e.preventDefault()
    addTag()
  } else if (e.key === "Backspace") {
    handleBackspace()
  }
}

function removeTag(index: number) {
  const next = [...props.modelValue]
  next.splice(index, 1)
  emit("update:modelValue", next)
}

function handleBackspace() {
  if (inputText.value === "" && props.modelValue.length > 0) {
    removeTag(props.modelValue.length - 1)
  }
}
</script>

<style scoped>
.tag-input-wrapper {
  flex: 1;
  background: #111;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  padding: 4px 6px;
  transition: border-color 0.2s;
  cursor: text;
}

.tag-input-wrapper:focus-within {
  border-color: rgba(255, 255, 255, 0.3);
}

.tags-list {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  align-items: center;
}

.tag-chip {
  display: inline-flex;
  align-items: center;
  gap: 3px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 3px;
  padding: 2px 6px;
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.7);
  transition: all 0.15s;
}

.tag-chip:hover {
  border-color: rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.1);
}

.tag-text {
  max-width: 120px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.tag-remove {
  background: none;
  border: none;
  color: rgba(255, 100, 100, 0.5);
  cursor: pointer;
  font-size: 0.8rem;
  line-height: 1;
  padding: 0 1px;
  transition: color 0.15s;
}

.tag-remove:hover {
  color: rgba(255, 100, 100, 0.9);
}

.tag-input-field {
  flex: 1;
  min-width: 80px;
  background: transparent;
  border: none;
  outline: none;
  color: rgba(255, 255, 255, 0.8);
  font-family: 'JetBrains Mono', 'Fira Code', Consolas, Monaco, monospace;
  font-size: 0.75rem;
  padding: 3px 4px;
}

.tag-input-field::placeholder {
  color: rgba(255, 255, 255, 0.25);
}
</style>

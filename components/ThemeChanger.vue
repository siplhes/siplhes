<template>
  <button
    @click="toggleTheme"
    class="p-2 rounded-lg bg-surface border border-border hover:border-accent transition-all duration-300"
    :title="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
  >
    <Icon 
      :name="isDark ? 'lucide:sun' : 'lucide:moon'" 
      class="w-5 h-5 text-text-muted hover:text-text"
    />
  </button>
</template>

<script setup>
const colorMode = useColorMode()

const isDark = computed(() => colorMode.value === 'dark')

const toggleTheme = () => {
  colorMode.value = isDark.value ? 'light' : 'dark'
}
</script>

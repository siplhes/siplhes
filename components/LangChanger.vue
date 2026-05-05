<template>
  <button
    @click="toggleLanguage"
    class="flex items-center gap-2 px-3 py-2 rounded-lg bg-surface border border-border hover:border-accent transition-all duration-300"
    :title="currentLocale === 'en' ? 'Switch to Spanish' : 'Switch to English'"
  >
    <NuxtImg
      :src="currentLocale === 'en' ? '/uk.svg' : '/es.svg'"
      class="w-6 h-6"
      :alt="currentLocale === 'en' ? 'English flag' : 'Spanish flag'"
    />
    <span class="text-sm font-medium text-text-muted hover:text-text">
      {{ currentLocale === 'en' ? 'EN' : 'ES' }}
    </span>
  </button>
</template>

<script setup>
const { locale, setLocale } = useI18n()

const toggleLanguage = () => {
  const newLocale = locale.value === 'en' ? 'es' : 'en'
  setLocale(newLocale)
}
</script>
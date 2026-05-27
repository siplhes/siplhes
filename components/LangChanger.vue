<template>
  <button
    @click="toggleLanguage"
    class="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-sm text-text-muted hover:text-text hover:bg-white/[0.04] transition-all"
    :title="currentLocale === 'en' ? 'Switch to Spanish' : 'Switch to English'"
  >
    <NuxtImg
      :src="currentLocale === 'en' ? '/uk.svg' : '/es.svg'"
      class="w-4 h-4"
      :alt="currentLocale === 'en' ? 'English flag' : 'Spanish flag'"
    />
    <span class="text-xs font-medium">{{ currentLocale === 'en' ? 'EN' : 'ES' }}</span>
  </button>
</template>

<script setup>
const { locale, setLocale } = useI18n();

const currentLocale = computed(() => locale.value);

const toggleLanguage = () => {
  const newLocale = currentLocale.value === 'en' ? 'es' : 'en';
  setLocale(newLocale);
};
</script>
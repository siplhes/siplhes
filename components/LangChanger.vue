<template>
  <button
    @click="toggleLanguage"
    class="text-lg p-2 rounded items-center justify-center inline-flex"
  >
    <NuxtImg
      :src="currentLocale === 'en' ? '/images/uk.svg' : '/images/es.svg'"
      class="w-[64px]"
    />
    <span class="font-mono">
      {{ currentLocale === 'en' ? 'English' : 'Español' }}
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
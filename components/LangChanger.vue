<template>

    <button
      @click="toggleLanguage"
      class="text-lg p-2 rounded items-center justify-center inline-flex"
    >
      <NuxtImg
        :src="currentLanguage === 'en' ? '/images/uk.svg'  :  '/images/es.svg'"
        class="w-[64px]"
      />
      <span :class="{ 'font-mono': true }">
        {{ currentLanguage === 'en' ? 'English' : 'Español' }}
      </span>
    </button>
 
</template>

<script>
export default {
  data() {
    return {
      currentLanguage: this.$i18n.locale,
    };
  },
  methods: {
    toggleLanguage() {
      this.currentLanguage = this.currentLanguage === 'en' ? 'es' : 'en';
      this.$i18n.locale = this.currentLanguage; 
    },
  },
};
</script>

<template>
  <div class=" w-10/12 m-auto relative max-w-screen-xl 
  bg-gradient-to-bl from-[#15141E] to-[#15141E]">
    <Header />
    <RouterView />
    <Footer />

  </div>
</template>

<script setup>
import { RouterView } from 'vue-router';
import Header from '@#/Header.vue'
import Footer from '@#/Footer.vue'
import { useHead } from 'unhead'
import { useSeoMeta } from '@unhead/vue'
useHead({
  title: 'Joseph C. Hurtado - Portfolio',
  meta: [
    { name: 'description', content: 'Joseph Hurtado - Portfolio' },
  ],
})
useSeoMeta({
  title: 'Joseph Hurtado | Portfolio',
  description: 'Joseph C. Hurtado portfolio',
  ogDescription: 'Joseph C. Hurtado portfolio',
  ogTitle: 'Joseph Hurtado | Portfolio',
  ogImage: './assets/me.webp',
  twitterCard: 'summary_large_image',
})
</script>

<style scoped></style>

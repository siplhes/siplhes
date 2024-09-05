<template>
  <div class="wrapper w-10/12 m-auto relative max-w-screen-xl @apply bg-gradient-to-bl from-[#15141E] to-[#15141E]">
  <Header />
<RouterView></RouterView>
<Footer />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router';
import Header from '@#/Header.vue'
import Footer from '@#/Footer.vue'
</script>


<style>

</style>
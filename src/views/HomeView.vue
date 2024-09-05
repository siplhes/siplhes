<template>

    <div class="wrapper w-10/12 m-auto relative max-w-screen-xl bg-gradient-to-bl from-[#15141E] to-[#15141E]">
    
      <div class="content"> <!-- Ensure there's space under the header -->      
        <Introduction />
        <DEV />
        <Projects />
        <Design />
        <About />
      </div>
    </div>
  </template>
  
  <script setup>
  import Header from '@/components/Header.vue'
  import Introduction from '@/components/Introduction.vue'
  import DEV from '@/components/DEV.vue'
  import Design from '@/components/Design.vue'
  import Projects from '@/components/Projects.vue'
  import About from '@/components/About.vue'
  import Footer from '@/components/Footer.vue'
  </script>
  
  <style scoped>
  </style>
  
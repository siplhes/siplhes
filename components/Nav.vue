<script setup lang="ts">
import LangChanger from "./LangChanger.vue";
</script>

<template>
  <nav class="navbar max-w-6xl shadow-sm mb-4 mx-auto">
    <div
      class="flex flex-inline justify-center items-center p-4 mb-2"
    >
      <NuxtLink to="/" class="nav-link">
        {{ $t("nav_title") }}
      </NuxtLink>
      <NuxtLink
        to="cv-joseph-hurtado.pdf"
        target="_blank"
        class="nav-link"
      >
        {{ $t("my_cv") }}
      </NuxtLink>
      <NuxtLink to="/About" class="nav-link"> About </NuxtLink>
      <LangChanger class="nav-link" />
    </div>

  </nav>
</template>
<style scoped>
.nav-link{
@apply normal-case text-base p-4 hover:bg-[#fefffa] hover:text-[#121212] rounded-lg text-center hover:scale-105 transition-all
}
</style>
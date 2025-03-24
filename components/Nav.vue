<script setup lang="ts">
import LangChanger from './LangChanger.vue';
</script>

<template>
  <nav class="navbar bg-base-100 shadow-sm mb-4 pt-3 ">
    <div class="p-1 flex flex-row bg-slate-900/30 justify-center items-center mb-2 mx-auto">
      <NuxtLink to="/" class="normal-case text-xl">
        {{ $t("nav_title")}}
        </NuxtLink>
        <NuxtLink to="cv-joseph-hurtado.pdf" target="_blank" class="normal-case text-xl">
        {{$t("my_cv")}} 
        </NuxtLink>
        <NuxtLink to="/About" class="normal-case text-xl">
          About
        </NuxtLink>
       <LangChanger />
    </div>
    <div class="grid grid-flow-col end-0 mx-auto gap-2">
      <NuxtLink to="https://github.com/siplhes" target="_blank">
      <Icon name="uil:github" class="social-icons text-4xl" />
      </NuxtLink>
      <Icon name="uil:linkedin" class="social-icons text-4xl" />
      <Icon name="uil:behance" class="social-icons text-4xl" />
    </div>
  </nav>
</template>

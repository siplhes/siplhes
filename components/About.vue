<template>
  <section class=" bg-[#fefffa] text-[#121212] py-12">
    <div class="text-center max-w-6xl mx-auto">
      <div>
      <p>e-mail:</p>
        <button
          class="email w-fit"
          data-tip="Copy to clipboard"
          @click="copyToClipboard"
        >
          siplhes@gmail.com 📋
        </button>
      </div>

    </div>
    <div
      class="flex flex-inline mx-auto gap-2 py-6 max-w-4xl justify-center items-center"
    >

      <NuxtLink
 to="https://wa.me/584127698781" target="_blank"
        class="group flex flex-col items-center justify-center"
      >
        <Icon name="uil:whatsapp-alt" class="social-icons text-4xl group-hover:scale-125" />
        <p class="invisible group-hover:visible mx-auto text-center w-full social-icons">
          WhatsApp
        </p>
      </NuxtLink>

      <NuxtLink
        to="https://github.com/siplhes"
        target="_blank"
        class="group flex flex-col items-center justify-center"
      >
        <Icon name="uil:github" class="social-icons text-4xl group-hover:scale-125" />
        <p class="invisible group-hover:visible mx-auto text-center w-full social-icons">
          Github
        </p>
      </NuxtLink>
      <NuxtLink
        target="_blank"
        to="https://www.linkedin.com/in/siplhes/"
        class="group flex flex-col items-center justify-center"
      >
        <Icon name="uil:linkedin" class="social-icons text-4xl group-hover:scale-125" />
        <p class="invisible group-hover:visible mx-auto text-center w-full social-icons">
          Linkedin
        </p>
      </NuxtLink>
      <NuxtLink
        target="_blank"
        to="https://behance.com/siplhes"
        class="group flex flex-col items-center justify-center"
      >
        <Icon name="uil:behance" class="social-icons text-4xl group-hover:scale-125" />
        <p class="invisible group-hover:visible mx-auto text-center w-full social-icons">
          Behance
        </p>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup>
import { computed, shallowRef, onUnmounted } from "vue";
const { $toast } = useNuxtApp();

// Reusable function for clipboard copy
const useClipboard = (text) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(text);
    $toast.success("Email copiado 📋");
  };
  return { copyToClipboard };
};

const { copyToClipboard } = useClipboard("siplhes@gmail.com");
</script>

<style scoped>
.card {
  @apply rounded-lg p-6;
}

.tooltip {
  @apply relative cursor-pointer;
}
</style>

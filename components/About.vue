<template>
  <section class="section bg-background">
    <div class="container">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-2xl md:text-3xl font-bold mb-8 text-text">Get in Touch</h2>
        
        <div class="card p-8 mb-8">
          <p class="text-text-muted mb-4 text-lg">Email</p>
          <button
            class="btn btn-accent text-lg"
            @click="copyToClipboard"
          >
            siplhes@gmail.com
          </button>
        </div>

        <div class="flex flex-wrap justify-center gap-4">
          <NuxtLink
            to="https://wa.me/584127698781"
            target="_blank"
            class="social-link"
            aria-label="WhatsApp"
          >
            <Icon name="uil:whatsapp-alt" class="w-6 h-6" />
          </NuxtLink>

          <NuxtLink
            to="https://github.com/siplhes"
            target="_blank"
            class="social-link"
            aria-label="GitHub"
          >
            <Icon name="uil:github" class="w-6 h-6" />
          </NuxtLink>

          <NuxtLink
            to="https://www.linkedin.com/in/siplhes/"
            target="_blank"
            class="social-link"
            aria-label="LinkedIn"
          >
            <Icon name="uil:linkedin" class="w-6 h-6" />
          </NuxtLink>

          <NuxtLink
            to="https://behance.com/siplhes"
            target="_blank"
            class="social-link"
            aria-label="Behance"
          >
            <Icon name="uil:behance" class="w-6 h-6" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { $toast } = useNuxtApp();

const copyToClipboard = () => {
  navigator.clipboard.writeText("siplhes@gmail.com");
  $toast.success("Email copied to clipboard 📋");
};
</script>

<style scoped>
</style>

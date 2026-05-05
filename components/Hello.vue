<template>
  <section class="section">
    <div class="container">
      <div class="flex flex-col items-center text-center md:grid md:grid-cols-2 md:gap-16 md:items-center md:text-left">
        <div class="mb-8 md:mb-0 order-2 md:order-1 animate-fade-in-up">
          <h2 class="text-2xl md:text-3xl font-semibold mb-4 text-accent">
            {{ $t("hello") }}
          </h2>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-text">
            Joseph Hurtado
          </h1>
          <h3 class="text-lg md:text-xl text-text-muted leading-relaxed max-w-lg">
            {{ $t("description") }}
          </h3>
        </div>
        <div class="order-1 md:order-2 animate-scale-in">
          <div class="relative inline-block">
            <NuxtImg
              class="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full object-cover border-4 border-border transform hover:scale-105 transition-transform duration-500"
              src="https://i.imgur.com/ZhPz5xP.png"
              alt="Joseph Hurtado"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>

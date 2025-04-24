<template>
  <section >
    <div class="container-hello px-4 py-12 md:py-16">
      <div
        class="grid-container flex flex-col items-center text-center md:grid md:grid-cols-2 md:gap-12 md:items-center md:text-left"
      >
        <div class="image-wrapper mb-6 md:mb-0 md:order-last">
          <NuxtImg
            class="my-image w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full object-cover mx-auto md:mx-0 shadow-lg"
            src="https://i.imgur.com/ZhPz5xP.png"
            alt="Joseph Hurtado"
          />
        </div>
        <div class="text-wrapper">
          <h2 class="title text-2xl md:text-3xl font-semibold mb-2 text-primary">
            {{ $t("hello") }}
          </h2>
          <h1 class="my-name text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <div class="tooltip tooltip-primary" data-tip="Siplhes">Joseph Hurtado</div>
          </h1>
          <h3 class="description text-lg md:text-xl text-base-content/80">
            {{ $t("description") }}
          </h3>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Se pueden eliminar los estilos CSS si Tailwind los maneja completamente */
/* O mantener estilos muy específicos aquí si es necesario */
</style>

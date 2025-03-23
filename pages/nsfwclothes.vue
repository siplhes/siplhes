<template>
  <div class="container mx-auto px-4 py-8 prose max-w-4xl">
    <NuxtLink to="/" class="normal-case text-xl">Volver</NuxtLink>
    <div id="project" class="flex justify-center mb-12">
      <NSFWLogo class="nsfwlogo" />
    </div>

    <div class="space-y-8">
      <!-- Propósito -->
      <section class="space-y-4">
        <h2 class="section-title">Propósito</h2>
        <p class="section-text">
          Crear un sitio web donde se le permita a los clientes apreciar la
          variedad de diseños y productos que NSFW Clothes dispone de una manera
          sencilla y atrayente, el cliente puede navegar fácilmente por el sitio
          y decantarse por algún producto en especial para proceder a su compra.
        </p>
      </section>

      <!-- Objetivo -->
      <section class="space-y-4">
        <h2 class="section-title">Objetivo</h2>
        <p class="section-text">
          Desarrollar una aplicación funcional en todos sus aspectos con
          respecto a las demandas que el cliente pidió para su sitio web.
        </p>
      </section>

      <!-- Approach -->
      <section class="space-y-4">
        <h2 class="section-title">Enfoque</h2>
        <p class="section-text">
          Gane experiencia en el proceso de creación de una aplicación que
          maneja productos referenciales, pude implementar dos modos de leer la
          lista de productos, extrayendo datos de un JSON alojado en AWS y
          también de una base de datos MySQL mediante peticiones a una API.
        </p>
      </section>

      <!-- Duración del Proyecto -->
      <section class="space-y-4">
        <h2 class="section-title">Duración</h2>
        <p class="section-text">
          Me ha tomado un poco más de dos semanas en terminar la versión hecha
          en Nuxt.js
        </p>
      </section>

      <!-- Rol -->
      <section class="space-y-4">
        <h2 class="section-title">Rol</h2>
        <p class="section-text">
          Al ser un proyecto sencillo, este proyecto está totalmente hecho por
          mí.
        </p>
      </section>

      <!-- Futuro -->
      <section class="space-y-4">
        <h2 class="section-title">Futuro</h2>
        <div class="section-text">
          Cambios propuestos para el futuro:
          <ul class="list-disc pl-5">
            <li>Sistema de manejo de productos</li>
            <li>Sistema de manejo de pedidos y facturas</li>
            <li>Panel de administración</li>
            <li>Motor de búsqueda</li>
            <li>Mejoras en el carrito de compras</li>
            <li>Pasarela de pagos (Paypal, Binance, etc)</li>
          </ul>
        </div>
      </section>

      <!-- Producto Final -->
      <section class="space-y-4">
        <h2 class="section-title">Producto Final</h2>
        <NuxtImg
          src="/images/nsfw1.webp"
          class="w-full object-cover"
          alt="Captura de pantalla del proyecto 1"
        />
      </section>
    </div>
  </div>
</template>

<script setup>

useSeoMeta({
  title: "NSFW Clothes project by Joseph Hurtado",
  ogTitle: "NSFW Clothes project by Joseph Hurtado",
  description: "NSFW Clothes project developed by Joseph Hurtado",
  ogDescription: "NSFW Clothes project developed by Joseph Hurtado",
  ogImage: "https://example.com/image.png",
  twitterCard: "summary_large_image",
});
</script>

<style scoped>
.container {
  @apply mx-auto px-4 py-8;
}

.prose {
  @apply max-w-4xl;
}

#project {
  @apply flex justify-center mb-12;
}

.section-title {
  @apply text-2xl font-bold border-b-2 border-[#fefffa] pb-2 mt-8 mb-4;
}

.section-text {
  @apply text-lg leading-relaxed text-gray-400;
}

.list-disc {
  @apply pl-5;
}

</style>

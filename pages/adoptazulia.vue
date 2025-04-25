<template>
  <div  id="project" class="container mx-auto px-4 py-8 prose max-w-4xl">
    <NuxtLink to="/" class="normal-case text-xl">{{
      $t("back_button")
    }}</NuxtLink>
    <div class="flex  justify-center mb-12">
            <NuxtImg
            src="/images/az.webp"
            class="project-image"
            alt="Project logo"
          />   </div>
    <div class="flex flex-row items-center justify-center">
      <h1 class="basis-2/3 project-title">
        {{ $t("az.title") }}
      </h1>
      <NuxtLink
        to="https://adopta-zulia.vercel.app"
        target="_blank"
        class="btn basis-1/3 "
        >{{$t("visit") }} <Icon name="icon-park-outline:link-one" class="fill-[#fefffa]" 
      />
    </NuxtLink>
    </div>
    <div class="space-y-8">
      <!-- Purpose -->
      <section class="space-y-4">
        <h2 class="section-title">{{ $t("purpose") }}</h2>
        <p class="section-text">
          {{ $t("az.purpose") }}
        </p>
      </section>

      <!-- Objective -->
      <section class="space-y-4">
        <h2 class="section-title">{{ $t("objective") }}</h2>
        <p class="section-text">{{ $t("az.objective") }}</p>
      </section>

      <!-- Approach -->
      <section class="space-y-4">
        <h2 class="section-title">{{ $t("approach") }}</h2>
        <p class="section-text">
          {{ $t("az.approach") }}
        </p>
      </section>

      <!-- Project Duration -->
      <section class="space-y-4">
        <h2 class="section-title">{{ $t("project_duration") }}</h2>
        <p class="section-text">
          {{ $t("az.duration") }}
        </p>
      </section>

      <!-- Role -->
      <section class="space-y-4">
        <h2 class="section-title">{{ $t("role") }}</h2>
        <p class="section-text">
          {{ $t("az.role") }}
        </p>
      </section>

      <!-- Future Enhancements -->
      <section class="space-y-4">
        <h2 class="section-title">{{ $t("future_enhancements") }}</h2>
        <div class="section-text">
          {{ $t("az.future_enhancements.title") }}
          <ul class="list-disc pl-5">
            <li>{{ $t("az.future_enhancements.item1") }}</li>
            <li>{{ $t("az.future_enhancements.item2") }}</li>
                        <li>{{ $t("az.future_enhancements.item3") }}</li>
          </ul>
        </div>
      </section>

      <!-- Final Product -->
      <section class="space-y-4">
        <h2 class="section-title">Final Product</h2>
        <NuxtImg
          src="/images/az1.webp"
          class="w-full object-cover"
          alt="Project screenshot"
        />
      </section>
    </div>
  </div>
</template>

<script setup>

useSeoMeta({
  title: "az Clothes Project by Joseph Hurtado",
  ogTitle: "az Clothes Project by Joseph Hurtado",
  description: "az Clothes project developed by Joseph Hurtado",
  ogDescription: "az Clothes project developed by Joseph Hurtado",
  ogImage: "https://example.com/image.png",
  twitterCard: "summary_large_image",
});
</script>

<style scoped>
.project-image {
  @apply col-span-1 object-cover rounded-md h-80;
} 
</style>
<template>
  <div id="project"  class="container mx-auto px-4 py-8 prose max-w-4xl">
    <NuxtLink to="/" class="normal-case text-xl">{{
      $t("back_button")
    }}</NuxtLink>
    <div  class="flex justify-center mb-12">
      <NuxtImg src="/images/BookAChoose.svg" class="w-1/2" />
    </div>
    <div class="flex flex-row items-center justify-center">
      <h1 class="basis-2/3 project-title">
        {{ $t("bac.title") }}
      </h1>
      <NuxtLink
        to="https://bookachoose.vercel.app"
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
          {{ $t("bac.purpose") }}
        </p>
      </section>

      <!-- Objective -->
      <section class="space-y-4">
        <h2 class="section-title">{{ $t("objective") }}</h2>
        <p class="section-text">{{ $t("bac.objective") }}</p>
      </section>

      <!-- Approach -->
      <section class="space-y-4">
        <h2 class="section-title">{{ $t("approach") }}</h2>
        <p class="section-text">
          {{ $t("bac.approach") }}
        </p>
      </section>

      <!-- Project Duration -->
      <section class="space-y-4">
        <h2 class="section-title">{{ $t("project_duration") }}</h2>
        <p class="section-text">
          {{ $t("bac.duration") }}
        </p>
      </section>

      <!-- Role -->
      <section class="space-y-4">
        <h2 class="section-title">{{ $t("role") }}</h2>
        <p class="section-text">
          {{ $t("bac.role") }}
        </p>
      </section>
      <section class="space-y-4">
        <h2 class="section-title">{{ $t("bac.characteristics.title") }}</h2>
        <div class="section-text">
    
             <ul class="list-disc pl-5">
            <li>{{ $t("bac.characteristics.item1") }}</li>
            <li>{{ $t("bac.characteristics.item2") }}</li>
            <li>{{ $t("bac.characteristics.item3") }}</li>
          </ul>
        </div>
      </section>
      <!-- Future Enhancements -->
      <section class="space-y-4">
        <h2 class="section-title">{{ $t("future_enhancements") }}</h2>
        <div class="section-text">
          {{ $t("bac.future_enhancements.title") }}
             <ul class="list-disc pl-5">
            <li>{{ $t("bac.future_enhancements.item1") }}</li>
            <li>{{ $t("bac.future_enhancements.item2") }}</li>
            <li>{{ $t("bac.future_enhancements.item3") }}</li>
            <li>{{ $t("bac.future_enhancements.item4") }}</li>
            <li>{{ $t("bac.future_enhancements.item5") }}</li>
            <li>{{ $t("bac.future_enhancements.item6") }}</li>
              <li>{{ $t("bac.future_enhancements.item7") }}</li>
          </ul>
        </div>
      </section>

      <!-- Final Product -->
      <section class="space-y-4">
        <h2 class="section-title">{{ $t("final_product") }}</h2>
        <NuxtImg
          src="/images/bac/1.webp"
          class="w-full object-cover"
          alt="Project screenshot"
        />
     
               <NuxtImg
          src="/images/bac/2.webp"
          class="w-full object-cover"
          alt="Project screenshot"
        />
               <NuxtImg
          src="/images/bac/3.webp"
          class="w-full object-cover"
          alt="Project screenshot"
        />
               <NuxtImg
          src="/images/bac/4.webp"
          class="w-full object-cover"
          alt="Project screenshot"
        />
               <NuxtImg
          src="/images/bac/5.webp"
          class="w-full object-cover"
          alt="Project screenshot"
        />
      </section>
    </div>
  </div>
</template>

<script setup>

useSeoMeta({
  title: "Book-a-Choose Project by Joseph Hurtado",
  ogTitle: "Book-a-Choose Project by Joseph Hurtado",
  description: "Book-a-Choose project developed by Joseph Hurtado",
  ogDescription: "Book-a-Choose project developed by Joseph Hurtado",
  ogImage: "https://example.com/image.png",
  twitterCard: "summary_large_image",
});

</script>

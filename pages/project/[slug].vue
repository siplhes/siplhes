<template>
  <div v-if="project" id="project" class="container mx-auto px-4 py-8 prose max-w-4xl">
    <NuxtLink to="/" class="normal-case text-xl">{{
      $t("back_button")
    }}</NuxtLink>
    <div class="flex justify-center mb-12">
      <NuxtImg
        v-if="project.logo.type === 'image'"
        :src="project.logo.src"
        :class="project.logo.className"
        alt="Project logo"
      />
      <component
        v-else
        :is="project.logo.component"
        :class="project.logo.className"
      />
    </div>
    <div class="flex flex-row items-center justify-center">
      <h1 class="basis-2/3 project-title">
        {{ $t(`${project.i18nKey}.title`) }}
      </h1>
      <NuxtLink
        :to="project.url"
        target="_blank"
        class="btn basis-1/3"
      >
        {{ $t("visit") }} <Icon name="icon-park-outline:link-one" class="fill-[#fefffa]"
      />
    </NuxtLink>
    </div>
    <div class="space-y-8">
      <!-- Purpose -->
      <section class="space-y-4">
        <h2 class="section-title">{{ $t("purpose") }}</h2>
        <p class="section-text">
          {{ $t(`${project.i18nKey}.purpose`) }}
        </p>
      </section>

      <!-- Objective -->
      <section class="space-y-4">
        <h2 class="section-title">{{ $t("objective") }}</h2>
        <p class="section-text">{{ $t(`${project.i18nKey}.objective`) }}</p>
      </section>

      <!-- Approach -->
      <section class="space-y-4">
        <h2 class="section-title">{{ $t("approach") }}</h2>
        <p class="section-text">
          {{ $t(`${project.i18nKey}.approach`) }}
        </p>
      </section>

      <!-- Project Duration -->
      <section class="space-y-4">
        <h2 class="section-title">{{ $t("project_duration") }}</h2>
        <p class="section-text">
          {{ $t(`${project.i18nKey}.duration`) }}
        </p>
      </section>

      <!-- Role -->
      <section class="space-y-4">
        <h2 class="section-title">{{ $t("role") }}</h2>
        <p class="section-text">
          {{ $t(`${project.i18nKey}.role`) }}
        </p>
      </section>

      <!-- Characteristics (if present) -->
      <section v-if="project.hasCharacteristics" class="space-y-4">
        <h2 class="section-title">{{ $t(`${project.i18nKey}.characteristics.title`) }}</h2>
        <div class="section-text">
          <ul class="list-disc pl-5">
            <li>{{ $t(`${project.i18nKey}.characteristics.item1`) }}</li>
            <li>{{ $t(`${project.i18nKey}.characteristics.item2`) }}</li>
            <li v-if="$t(`${project.i18nKey}.characteristics.item3`)">{{ $t(`${project.i18nKey}.characteristics.item3`) }}</li>
          </ul>
        </div>
      </section>

      <!-- Future Enhancements -->
      <section class="space-y-4">
        <h2 class="section-title">{{ $t("future_enhancements") }}</h2>
        <div class="section-text">
          {{ $t(`${project.i18nKey}.future_enhancements.title`) }}
          <ul class="list-disc pl-5">
            <li v-for="(_, index) in 7" :key="index">
              {{ $t(`${project.i18nKey}.future_enhancements.item${index + 1}`) }}
            </li>
          </ul>
        </div>
      </section>

      <!-- Final Product -->
      <section class="space-y-4">
        <h2 class="section-title">{{ $t("final_product") }}</h2>
        <NuxtImg
          v-for="(image, index) in project.images"
          :key="index"
          :src="image"
          class="w-full object-cover"
          alt="Project screenshot"
        />
      </section>
    </div>
  </div>
  <div v-else class="container mx-auto px-4 py-8">
    <p>Project not found</p>
  </div>
</template>

<script setup>
const route = useRoute()
const { getProjectBySlug } = await import('~/data/projects')

const project = computed(() => getProjectBySlug(route.params.slug))

useSeoMeta({
  title: computed(() => project.value?.seoTitle || 'Project'),
  ogTitle: computed(() => project.value?.seoTitle || 'Project'),
  description: computed(() => `Project developed by Joseph Hurtado`),
  ogDescription: computed(() => `Project developed by Joseph Hurtado`),
  ogImage: "https://example.com/image.png",
  twitterCard: "summary_large_image",
})
</script>

<style scoped>
.project-image {
  @apply col-span-1 object-cover rounded-md h-80;
}
</style>

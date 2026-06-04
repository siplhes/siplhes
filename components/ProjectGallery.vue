<template>
  <div>
    <!-- Thumbnail Grid -->
    <div
      class="grid grid-cols-2 sm:grid-cols-3 gap-3"
    >
      <button
        v-for="(img, idx) in images"
        :key="idx"
        @click="openGallery(idx)"
        class="group relative aspect-video rounded-xl overflow-hidden border border-white/5 bg-surface2 transition-all duration-300 hover:border-white/20 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
      >
        <NuxtImg
          :src="img"
          :alt="`${alt} — image ${idx + 1}`"
          class="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
          loading="lazy"
        />
        <!-- Hover overlay -->
        <div class="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
          <Icon name="lucide:search" class="w-5 h-5 text-white/0 group-hover:text-white/70 transition-all duration-300" />
        </div>
        <!-- Image number badge -->
        <div class="absolute bottom-2 right-2 bg-black/60 backdrop-blur-sm text-white/70 text-[10px] font-mono px-1.5 py-0.5 rounded-md">
          {{ idx + 1 }}
        </div>
      </button>
    </div>

    <!-- Lightbox Overlay -->
    <Teleport to="body">
      <Transition name="lightbox">
        <div
          v-if="activeIndex !== null"
          class="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-sm flex flex-col items-center justify-center select-none"
          @click.self="closeGallery"
          @wheel.prevent
        >
          <!-- Header bar -->
          <div class="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-4 sm:px-6 py-3 bg-gradient-to-b from-black/60 to-transparent">
            <div class="flex items-center gap-3">
              <span class="text-xs sm:text-sm font-mono text-white/60">
                <span class="text-white/90">{{ activeIndex! + 1 }}</span>
                <span class="mx-1.5">/</span>
                <span>{{ totalImages }}</span>
              </span>
              <span class="hidden sm:inline text-[10px] font-mono text-white/30 uppercase tracking-widest">{{ alt }}</span>
            </div>
            <button
              @click="closeGallery"
              class="w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
              aria-label="Close gallery"
            >
              <Icon name="lucide:x" class="w-4 h-4" />
            </button>
          </div>

          <!-- Previous button -->
          <button
            v-if="totalImages > 1"
            @click="prevImage"
            class="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
            aria-label="Previous image"
          >
            <Icon name="lucide:chevron-left" class="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <!-- Main image -->
          <div class="relative w-full h-full flex items-center justify-center px-12 sm:px-20 md:px-24">
            <Transition name="gallery-slide" mode="out-in">
              <NuxtImg
                :key="activeIndex"
                :src="images[activeIndex!]"
                :alt="`${alt} — image ${activeIndex! + 1}`"
                class="max-w-full max-h-[75vh] w-auto h-auto object-contain rounded-xl shadow-2xl"
                preload
                @error="onImageError"
              />
            </Transition>
          </div>

          <!-- Next button -->
          <button
            v-if="totalImages > 1"
            @click="nextImage"
            class="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
            aria-label="Next image"
          >
            <Icon name="lucide:chevron-right" class="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <!-- Bottom thumbnail strip -->
          <div
            v-if="totalImages > 1"
            class="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-black/60 to-transparent pt-10 pb-3 px-4"
          >
            <div class="flex justify-center gap-2 max-w-xl mx-auto overflow-x-auto">
              <button
                v-for="(img, idx) in images"
                :key="idx"
                @click="goToImage(idx)"
                class="shrink-0 w-12 h-8 sm:w-14 sm:h-9 rounded-lg overflow-hidden border-2 transition-all duration-200 focus-visible:outline-none"
                :class="idx === activeIndex ? 'border-white/70 opacity-100' : 'border-transparent opacity-40 hover:opacity-70'"
              >
                <NuxtImg
                  :src="img"
                  :alt="`Thumbnail ${idx + 1}`"
                  class="w-full h-full object-cover"
                  loading="lazy"
                  format="webp"
                  width="56"
                  height="36"
                />
              </button>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { computed, watch, onMounted, onUnmounted } from "vue";

const props = defineProps<{
  images: string[]
  alt?: string
}>();

const alt = computed(() => props.alt || "Project screenshot");
const totalImages = computed(() => props.images?.length || 0);

const activeIndex = ref<number | null>(null);

function openGallery(idx: number) {
  activeIndex.value = idx;
  document.body.style.overflow = "hidden";
}

function closeGallery() {
  activeIndex.value = null;
  document.body.style.overflow = "";
}

function prevImage() {
  if (activeIndex.value === null || totalImages.value < 2) return;
  activeIndex.value = activeIndex.value > 0 ? activeIndex.value - 1 : totalImages.value - 1;
}

function nextImage() {
  if (activeIndex.value === null || totalImages.value < 2) return;
  activeIndex.value = activeIndex.value < totalImages.value - 1 ? activeIndex.value + 1 : 0;
}

function goToImage(idx: number) {
  activeIndex.value = idx;
}

function onImageError() {
  // Could handle error state here if needed
}

// Keyboard navigation
function onKeydown(e: KeyboardEvent) {
  if (activeIndex.value === null) return;
  switch (e.key) {
    case "Escape":
      closeGallery();
      break;
    case "ArrowLeft":
      e.preventDefault();
      prevImage();
      break;
    case "ArrowRight":
      e.preventDefault();
      nextImage();
      break;
  }
}

// Touch/swipe support
let touchStartX = 0;
let touchEndX = 0;

function onTouchStart(e: TouchEvent) {
  touchStartX = e.changedTouches[0].screenX;
}

function onTouchEnd(e: TouchEvent) {
  if (activeIndex.value === null) return;
  touchEndX = e.changedTouches[0].screenX;
  const diff = touchStartX - touchEndX;
  if (Math.abs(diff) > 50) {
    if (diff > 0) nextImage();
    else prevImage();
  }
}

onMounted(() => {
  document.addEventListener("keydown", onKeydown);
});

onUnmounted(() => {
  document.removeEventListener("keydown", onKeydown);
  document.body.style.overflow = "";
});

// Clean up overflow when the component is unmounted with lightbox open
watch(activeIndex, (val) => {
  if (val === null) {
    document.body.style.overflow = "";
  }
});
</script>

<style scoped>
/* Lightbox enter/leave */
.lightbox-enter-active {
  transition: opacity 0.25s ease;
}
.lightbox-leave-active {
  transition: opacity 0.2s ease;
}
.lightbox-enter-from,
.lightbox-leave-to {
  opacity: 0;
}

/* Gallery slide transition */
.gallery-slide-enter-active {
  transition: all 0.2s ease-out;
}
.gallery-slide-leave-active {
  transition: all 0.15s ease-in;
  position: absolute;
}
.gallery-slide-enter-from {
  opacity: 0;
  transform: scale(0.96);
}
.gallery-slide-leave-to {
  opacity: 0;
  transform: scale(0.96);
}

/* Thumbnail strip scrollbar */
.overflow-x-auto {
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.overflow-x-auto::-webkit-scrollbar {
  display: none;
}
</style>

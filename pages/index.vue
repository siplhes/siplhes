<template>
  <div class="py-6 md:py-8">
    <div class="container">
      <!-- Bento Grid -->
      <div class="bento-grid">
        <!-- Hero — spans 2 rows on desktop, enters first -->
        <div class="bento-item bento-hero entrance-card" style="--stagger: 0">
          <Hello />
        </div>

        <!-- Stats / Social — right column, enters second -->
        <div class="bento-item bento-sidebar entrance-card" style="--stagger: 1">
          <About />
        </div>

        <!-- Projects Section — enters third -->
        <div class="bento-item bento-projects entrance-card" style="--stagger: 2">
          <Projects />
        </div>

        <!-- Tech Stack — full width, enters fourth -->
        <div class="bento-item bento-wide entrance-card" style="--stagger: 3">
          <TechStack />
        </div>
      </div>

      <!-- Footer -->
      <footer class="mt-12 pb-8 text-center entrance-card" style="--stagger: 4">
        <div class="flex items-center justify-center gap-3 text-xs text-text-muted2 font-mono">
          <span>© 2026 siplhes</span>
          <span class="w-px h-3 bg-border-light"></span>
          <span>Built with Nuxt 3</span>
          <span class="w-px h-3 bg-border-light"></span>
          <span class="flex items-center gap-1">
            <span class="status-dot"></span>
            Open to work
          </span>
        </div>
      </footer>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { usePortfolioData } from "~/composables/usePortfolioData";

const { loadAll } = usePortfolioData();
const siteUrl = useRuntimeConfig().public.siteUrl;

onMounted(() => {
  loadAll();
});

useSeoMeta({
  title: "Joseph Hurtado | Full Stack Developer",
  ogTitle: "Joseph Hurtado | Full Stack Developer",
  description: "Full Stack Developer specializing in Vue.js, Nuxt, Laravel & Node.js. View my projects, tech stack, and get in touch for freelance work.",
  ogDescription: "Full Stack Developer specializing in Vue.js, Nuxt, Laravel & Node.js. View my projects, tech stack, and get in touch for freelance work.",
  ogImage: "https://i.imgur.com/ZhPz5xP.png",
  ogUrl: siteUrl,
  twitterCard: "summary_large_image",
});

useHead({
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Joseph Hurtado",
        url: siteUrl,
        jobTitle: "Full Stack Developer",
        description: "Full Stack Developer specializing in Vue.js, Nuxt, Laravel & Node.js",
        image: "https://i.imgur.com/ZhPz5xP.png",
        email: "siplhes@gmail.com",
        sameAs: [
          "https://github.com/siplhes",
          "https://linkedin.com/in/siplhes",
        ],
        address: {
          "@type": "PostalAddress",
          addressCountry: "VE",
        },
        knowsAbout: [
          "Vue.js", "Nuxt.js", "Node.js", "Laravel",
          "TypeScript", "TailwindCSS", "Firebase",
          "PostgreSQL", "REST APIs", "Full Stack Development",
        ],
      }),
    },
  ],
});

// Refined scroll animation with performance optimizations
onMounted(() => {
  const cards = document.querySelectorAll('.entrance-card');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Use requestAnimationFrame to ensure smooth animation start
          requestAnimationFrame(() => {
            entry.target.classList.add('entrance-visible');
          });
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.05,
      rootMargin: '0px 0px -20px 0px',
    }
  );

  cards.forEach((el) => {
    // Set will-change before observation for GPU acceleration
    (el as HTMLElement).style.willChange = 'opacity, transform';
    observer.observe(el);
  });
});
</script>

<style scoped>
.bento-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  max-width: 1200px;
  margin: 0 auto;
}

@media (min-width: 768px) {
  .bento-grid {
    grid-template-columns: 1.6fr 1fr;
    gap: 1.25rem;
  }

  .bento-hero {
    grid-row: span 2;
  }

  .bento-wide {
    grid-column: 1 / -1;
  }

  .bento-projects {
    grid-column: 1 / -1;
  }
}

/* ──────────────────────────────────────────────
 * Staggered Entrance Animation
 * Each card gets a stagger delay from its --stagger CSS var
 * Uses cubic-bezier for a more natural "overshoot-less" ease
 * ────────────────────────────────────────────── */
.entrance-card {
  opacity: 0;
  transform: scale(0.94) translateY(20px);
  transition:
    opacity 0.55s cubic-bezier(0.16, 1, 0.3, 1),
    transform 0.55s cubic-bezier(0.16, 1, 0.3, 1);
  transition-delay: calc(var(--stagger, 0) * 90ms);
}

.entrance-card.entrance-visible {
  opacity: 1;
  transform: scale(1) translateY(0);
}

/* Clean up will-change after animation completes */
.entrance-card.entrance-visible {
  will-change: auto;
}

/* Subtle staggered entrance for children inside each card */
.entrance-card.entrance-visible :deep(.stagger-item) {
  opacity: 0;
  transform: translateY(8px);
  animation: staggerFadeIn 0.4s ease-out forwards;
  animation-delay: calc(0.1s + var(--item-index, 0) * 0.06s);
}

@keyframes staggerFadeIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>

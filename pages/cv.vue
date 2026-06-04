<template>
  <div class="min-h-screen bg-white text-black p-8 md:p-16 max-w-4xl mx-auto font-sans">
    <!-- Header -->
    <header class="mb-8">
      <h1 class="text-3xl md:text-4xl font-bold mb-2">{{ profile?.name || 'Joseph Hurtado' }}</h1>
      <p class="text-lg md:text-xl text-gray-700 mb-4">Full Stack Developer</p>
      <div class="flex flex-wrap gap-x-6 gap-y-1 text-sm text-gray-600">
        <span class="flex items-center gap-1.5">
          <span class="text-gray-400">✉</span>
          {{ email }}
        </span>
        <span class="flex items-center gap-1.5">
          <span class="text-gray-400">📍</span>
          {{ profile?.location || 'Venezuela' }}
        </span>
        <a v-if="linkedinUrl" :href="linkedinUrl" target="_blank" class="flex items-center gap-1.5 hover:text-gray-900 transition-colors">
          <span class="text-gray-400">🔗</span>
          {{ linkedinDisplay }}
        </a>
        <a v-if="githubUrl" :href="githubUrl" target="_blank" class="flex items-center gap-1.5 hover:text-gray-900 transition-colors">
          <span class="text-gray-400">⚡</span>
          {{ githubDisplay }}
        </a>
      </div>
    </header>

    <!-- Summary -->
    <section class="mb-8">
      <h2 class="text-xl font-bold border-b-2 border-black mb-4 pb-2">PROFESSIONAL SUMMARY</h2>
      <p class="text-gray-700 leading-relaxed">
        {{ profile?.description || defaultSummary }}
      </p>
    </section>

    <!-- Technical Skills (dynamic from Firebase) -->
    <section v-if="skillGroups.length" class="mb-8">
      <h2 class="text-xl font-bold border-b-2 border-black mb-4 pb-2">TECHNICAL SKILLS</h2>
      <div class="space-y-2">
        <div v-for="group in skillGroups" :key="group.label" class="flex flex-wrap items-baseline gap-x-2">
          <strong class="text-gray-900 whitespace-nowrap">{{ group.label }}:</strong>
          <span class="text-gray-700">{{ group.items.join(', ') }}</span>
        </div>
      </div>
    </section>

    <!-- Work Experience -->
    <section class="mb-8">
      <h2 class="text-xl font-bold border-b-2 border-black mb-4 pb-2">WORK EXPERIENCE</h2>

      <div class="mb-6">
        <h3 class="font-bold text-lg">Full Stack Developer</h3>
        <p class="text-gray-600 text-sm mb-2">Freelance — Present</p>
        <ul class="list-disc list-inside text-gray-700 space-y-1 text-sm">
          <li>Develop and maintain web applications using Nuxt.js and Vue.js</li>
          <li>Build RESTful APIs with Node.js, Express, and Fastify</li>
          <li>Implement responsive designs with TailwindCSS and modern CSS frameworks</li>
          <li>Collaborate with clients to deliver high-quality software solutions</li>
          <li>Manage databases including MySQL, PostgreSQL, and Firebase</li>
        </ul>
      </div>
    </section>

    <!-- Projects (dynamic from Firebase) -->
    <section v-if="dynamicProjects.length" class="mb-8">
      <h2 class="text-xl font-bold border-b-2 border-black mb-4 pb-2">PROJECTS</h2>

      <div v-for="proj in dynamicProjects" :key="proj.slug" class="mb-5">
        <h3 class="font-bold text-lg">{{ proj.title }}</h3>
        <p class="text-gray-600 text-sm mb-1">
          <a :href="proj.url" target="_blank" class="underline hover:text-gray-900">{{ proj.url }}</a>
        </p>
        <p class="text-gray-700 text-sm mb-1">
          {{ proj.purpose || proj.description }}
        </p>
        <p v-if="proj.techs?.length" class="text-gray-600 text-xs">
          <strong>Tech:</strong> {{ proj.techs.map(t => resolveTechLabel(t)).join(', ') }}
        </p>
      </div>
    </section>

    <!-- Languages -->
    <section class="mb-8">
      <h2 class="text-xl font-bold border-b-2 border-black mb-4 pb-2">LANGUAGES</h2>
      <ul class="list-disc list-inside text-gray-700 space-y-1">
        <li>Spanish — Native</li>
        <li>English — Professional</li>
      </ul>
    </section>

    <!-- Print/Download Button -->
    <div class="mt-8 no-print">
      <button
        @click="printCV"
        class="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
      >
        Download as PDF
      </button>
      <p class="text-xs text-gray-500 mt-2">Use your browser's print function (Ctrl+P) and save as PDF</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from "vue";
import { usePortfolioData } from "~/composables/usePortfolioData";
import { useTechData } from "~/composables/useTechData";

const { profile, social, tech, projects: projectsData, loadAll } = usePortfolioData();
const { getTechBySlug } = useTechData();
const siteUrl = useRuntimeConfig().public.siteUrl;

onMounted(() => {
  loadAll();
});

const defaultSummary = "Full Stack Developer with experience in building web applications using modern technologies. Proficient in JavaScript, Vue.js, Nuxt.js, Node.js, and various backend technologies. Passionate about creating clean, efficient, and user-friendly applications.";

const email = computed(() => {
  if (profile.value?.email) return profile.value.email;
  return atob("c2lwbGhlc0BnbWFpbC5jb20=");
});

// Extract social links for header
const linkedinUrl = computed(() => {
  if (!social.value) return '';
  const entry = Object.values(social.value).find(l => l.url?.includes('linkedin'));
  return entry?.url || '';
});
const linkedinDisplay = computed(() => {
  if (!linkedinUrl.value) return '';
  try { return new URL(linkedinUrl.value).pathname.replace('/', ''); }
  catch { return 'LinkedIn'; }
});
const githubUrl = computed(() => {
  if (!social.value) return '';
  const entry = Object.values(social.value).find(l => l.url?.includes('github'));
  return entry?.url || '';
});
const githubDisplay = computed(() => {
  if (!githubUrl.value) return '';
  try { return new URL(githubUrl.value).pathname.replace('/', ''); }
  catch { return 'GitHub'; }
});

// Dynamic skill groups from Firebase tech data
const skillGroups = computed(() => {
  if (!tech.value?.categories) return [];
  return tech.value.categories.map(cat => ({
    label: cat.label,
    items: (cat.items || []).map((item: any) => typeof item === 'string' ? item : item.label),
  }));
});

// Dynamic projects from Firebase
const dynamicProjects = computed(() => {
  if (!projectsData.value) return [];
  return Object.entries(projectsData.value).map(([slug, p]) => ({
    slug,
    title: p.title || slug,
    description: p.description || '',
    purpose: p.purpose || '',
    url: p.url || '',
    techs: p.techs || [],
  }));
});

function resolveTechLabel(slug: string): string {
  return getTechBySlug(slug)?.label || slug;
}

const printCV = () => {
  window.print();
};

useSeoMeta({
  title: "CV — Joseph Hurtado | Full Stack Developer",
  ogTitle: "CV — Joseph Hurtado | Full Stack Developer",
  description: "ATS-friendly CV of Joseph Hurtado — Full Stack Developer with experience in Vue.js, Nuxt, Laravel, Node.js and modern web technologies.",
  ogDescription: "ATS-friendly CV of Joseph Hurtado — Full Stack Developer with experience in Vue.js, Nuxt, Laravel, Node.js and modern web technologies.",
  ogImage: "https://i.imgur.com/ZhPz5xP.png",
  ogUrl: `${siteUrl}/cv`,
  robots: "noindex, nofollow",
  twitterCard: "summary",
});

useHead({
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Joseph Hurtado",
        jobTitle: "Full Stack Developer",
        url: siteUrl,
        email: "siplhes@gmail.com",
        sameAs: [
          "https://github.com/siplhes",
          "https://linkedin.com/in/siplhes",
        ],
      }),
    },
  ],
});
</script>

<style scoped>
@media print {
  .no-print {
    display: none;
  }

  body {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
}
</style>

<template>
  <div class="min-h-screen bg-white text-black p-8 md:p-16 max-w-4xl mx-auto">
    <!-- Header -->
    <header class="mb-8">
      <h1 class="text-3xl md:text-4xl font-bold mb-2">{{ profile?.name || 'Joseph Hurtado' }}</h1>
      <p class="text-lg md:text-xl text-gray-700 mb-4">Full Stack Developer</p>
      <div class="text-sm text-gray-600 space-y-1">
        <p>Email: {{ email }}</p>
        <p>LinkedIn: linkedin.com/in/siplhes</p>
        <p>GitHub: github.com/siplhes</p>
        <p>Location: {{ profile?.location || 'Venezuela' }}</p>
      </div>
    </header>

    <!-- Summary -->
    <section class="mb-8">
      <h2 class="text-xl font-bold border-b-2 border-black mb-4 pb-2">PROFESSIONAL SUMMARY</h2>
      <p class="text-gray-700 leading-relaxed">
        Full Stack Developer with experience in building web applications using modern technologies. 
        Proficient in JavaScript, Vue.js, Nuxt.js, Node.js, and various backend technologies. 
        Passionate about creating clean, efficient, and user-friendly applications.
      </p>
    </section>

    <!-- Skills -->
    <section class="mb-8">
      <h2 class="text-xl font-bold border-b-2 border-black mb-4 pb-2">TECHNICAL SKILLS</h2>
      <ul class="list-disc list-inside text-gray-700 space-y-1">
        <li><strong>Languages:</strong> JavaScript, PHP, HTML, CSS, SCSS</li>
        <li><strong>Frameworks:</strong> Vue.js, Nuxt.js, Inertia.js, Express, Fastify, Laravel</li>
        <li><strong>Databases:</strong> MySQL, PostgreSQL, Firebase Realtime Database</li>
        <li><strong>Tools:</strong> Git, TailwindCSS, Bootstrap, Figma, AWS</li>
        <li><strong>Development:</strong> REST APIs, Full Stack Development, UI/UX Design</li>
      </ul>
    </section>

    <!-- Experience -->
    <section class="mb-8">
      <h2 class="text-xl font-bold border-b-2 border-black mb-4 pb-2">WORK EXPERIENCE</h2>

      <div class="mb-6">
        <h3 class="font-bold text-lg">Full Stack Developer</h3>
        <p class="text-gray-600 text-sm mb-2">Freelance | [Current]</p>
        <ul class="list-disc list-inside text-gray-700 space-y-1 text-sm">
          <li>Developed and maintained web applications using Nuxt.js and Vue.js</li>
          <li>Built RESTful APIs with Node.js, Express, and Fastify</li>
          <li>Implemented responsive designs using TailwindCSS and Bootstrap</li>
          <li>Collaborated with clients to deliver high-quality software solutions</li>
        </ul>
      </div>

      <div class="mb-6">
        <h3 class="font-bold text-lg">Full Stack Developer</h3>
        <p class="text-gray-600 text-sm mb-2">[Previous Company] | [Dates]</p>
        <ul class="list-disc list-inside text-gray-700 space-y-1 text-sm">
          <li>Developed web applications using Laravel and PHP</li>
          <li>Created and maintained MySQL databases</li>
          <li>Implemented user authentication and authorization systems</li>
          <li>Collaborated with design team to implement UI/UX improvements</li>
        </ul>
      </div>
    </section>

    <!-- Projects -->
    <section class="mb-8">
      <h2 class="text-xl font-bold border-b-2 border-black mb-4 pb-2">PROJECTS</h2>

      <div class="mb-6">
        <h3 class="font-bold text-lg">AdoptAzulia</h3>
        <p class="text-gray-600 text-sm mb-2">https://adoptazulia.org.ve</p>
        <p class="text-gray-700 text-sm mb-2">
          Web application for pet adoption using Nuxt.js, Vue.js, Node.js, Express, MySQL, and AWS.
        </p>
        <p class="text-gray-600 text-xs"><strong>Tech:</strong> Nuxt.js, Vue.js, TailwindCSS, DaisyUI, Node.js, Express.js, MySQL, AWS</p>
      </div>

      <div class="mb-6">
        <h3 class="font-bold text-lg">NSFW Clothes</h3>
        <p class="text-gray-600 text-sm mb-2">https://nsfwclothes.vercel.app/</p>
        <p class="text-gray-700 text-sm mb-2">
          E-commerce platform for clothing using Nuxt.js, Vue.js, Node.js, Fastify, and JSON.
        </p>
        <p class="text-gray-600 text-xs"><strong>Tech:</strong> Nuxt.js, Vue.js, TailwindCSS, Node.js, Fastify, JSON</p>
      </div>

      <div class="mb-6">
        <h3 class="font-bold text-lg">BookAChoose</h3>
        <p class="text-gray-600 text-sm mb-2">https://bookachoose.vercel.app</p>
        <p class="text-gray-700 text-sm mb-2">
          Book recommendation platform using Nuxt.js, Vue.js, Firebase Realtime Database, and AWS.
        </p>
        <p class="text-gray-600 text-xs"><strong>Tech:</strong> Nuxt.js, Vue.js, TailwindCSS, Firebase RTDB, AWS</p>
      </div>
    </section>

    <!-- Education -->
    <section class="mb-8">
      <h2 class="text-xl font-bold border-b-2 border-black mb-4 pb-2">EDUCATION</h2>

      <div class="mb-4">
        <h3 class="font-bold text-lg">[Degree Name]</h3>
        <p class="text-gray-600 text-sm">[University Name] | [Graduation Year]</p>
      </div>
    </section>

    <!-- Languages -->
    <section class="mb-8">
      <h2 class="text-xl font-bold border-b-2 border-black mb-4 pb-2">LANGUAGES</h2>
      <ul class="list-disc list-inside text-gray-700 space-y-1">
        <li>Spanish - Native</li>
        <li>English - Professional</li>
      </ul>
    </section>

    <!-- Print/Download Button -->
    <div class="mt-8 no-print">
      <button 
        @click="printCV" 
        class="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
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

const { profile, loadAll } = usePortfolioData();

onMounted(() => {
  loadAll();
});

const email = computed(() => {
  if (profile.value?.email) return profile.value.email;
  return atob("c2lwbGhlc0BnbWFpbC5jb20=");
});

const printCV = () => {
  window.print()
}

useHead({
  title: "Joseph Hurtado - CV",
  meta: [{ name: "description", content: "ATS-friendly CV of Joseph Hurtado - Full Stack Developer" }],
})
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

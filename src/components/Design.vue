<template>
  <section id="design" class="text-white  sm:min-h-0 h-auto pt-28 sm:pt-32 sm:w-10/12 lg:w-8/12 opacity-0 anim_7"
    ref="anim_7" v-scroll-reveal.reset>
    <h2 class="uppercase text-xl  font-bold mb-5 sm:text-2xl md:text-3xl lg:text-4xl text-yellow-500">Design</h2>
    <p
      class="font-light text-lg opacity-60 leading-relaxed sm:text-xl lg:text-2xl sm:leading-relaxed md:leading-relaxed lg:leading-relaxed">
      I've studied graphic design in Dr. Rafael Belloso Chacin University located in
      Maracaibo,Venezuela.
      <span class="font-md">but before that i've already experience with graphic design and development in
        years online in forum around the internet</span>.
    </p>

    <ul class="flex flex-wrap mt-8">
      <li v-for="(skill, index) in skills" :key="index"
        class=" font-semibold font-mono from-accent-content leading-relaxed bg-slate-800/30 hover:text-slate-900 hover:bg-yellow-500 mr-3 mt-3 py-1 px-4 md:text-lg lg:text-xl">
        > {{ skill }}
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      skills: [
        "Adobe Photoshop",
        "Adobe Illustrator",
        "Adobe InDesign",
        "Affinity Designer",
        "Figma",
      ],
    };
  },
  mounted() {
    setInterval(() => {
      this.$refs.anim_7.classList.add("fade");
    }, 80);
  },
};
</script>

<style scoped>
li {
  border-radius: 8px;
}

.anim_7 {
  transition: all 0.5s ease;
}

.anim_7.fade {
  opacity: 1;
  transition-delay: 2s;
}
</style>


<template>
	<section id="dev" class="text-white sm:min-h-0 h-auto pt-28 sm:pt-32 sm:w-10/12 lg:w-8/12"
		>
		<h2 class="uppercase font-bold text-xl mb-5 sm:text-2xl md:text-3xl lg:text-4xl text-yellow-500">
			DEV
		</h2>
		<p class="font-light text-lg opacity-60
			 leading-relaxed sm:text-xl lg:text-2xl
			  sm:leading-relaxed md:leading-relaxed
			   lg:leading-relaxed mb-4">
			   Passionate about web development since a young age, I began my journey at 13, building Habbo fan pages using HTML, CSS3, and jQuery. Over the years, my skills have evolved, and I've developed a clear vision for my projects.

Starting with server-side development, I gained experience with PHP and Laravel, creating CRUD applications. To enhance my frontend capabilities, I delved into JavaScript and Vue.js two years ago, and I continue to expand my knowledge in these areas.
		</p>
		<ul class="flex flex-wrap mt-8">
			<li v-for="(skill, index) in skills" :key="index"
				class="font-semibold font-mono from-accent-content leading-relaxed bg-slate-800/30 hover:text-slate-900 hover:bg-yellow-500 mr-3 mt-3 py-1 px-4 md:text-lg lg:text-xl">
				> {{ skill }}
			</li>
		</ul>
	</section>
</template>

<script>
export default {
	name: 'About',
	data() {
		return {
			skills: [
				'Javascript',
				'Vue.js',
				'Node.js',
				'Express',
				'HTML',
				'CSS',
				'SASS',
				'Bootstrap',
				'TailwindCSS',
				'Firebase',
				'Auth0',
				'VITE', 'MySQL', 'Laravel',
				'Postgres',
				'Figma',
				'Fastify',
				'PHP'
			],
		}
	},

}
</script>

<style scoped>
li {
	border-radius: 8px;
}
</style>

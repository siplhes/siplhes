<template>
	<nav class="w-full lg:w-[10%] lg:pt-0 pt-4  lg:mr-[25%] h-16 flex justify-between items-center fixed top-0 right-0 py-4 z-50
		sm:max-w-screen-xl sm:flex-col sm:h-auto sm:items-end sm:text-right sm:p-4
		bg-[rgb(209 213 219 / 0.001)] backdrop-blur-md  ">
		<span class="w-3/12 mr-3 sm:mr-0 sm:h-11" />
		<ul class="flex flex-1 justify-between sm:flex-col sm:mt-2 sm:gap-4 space-x-2">
			<li v-for="(section, index) in menu" :key="index"
				class="text-white uppercase font-normal text-lg sm:text-xl py-2 sm:mt-2 md:text-2xl hover:bg-yellow-500 lg:hover:rounded-s-md sm:hover:rounded-md hover:text-slate-900">
				<a :href="section.href" :target="section.target ? '_blank' : ''" :class="{ resume: section.target }">
				{{section.title }}</a>
			</li>
		</ul>
	</nav>
</template>

<script>
export default {
	name: 'Header',
	data() {
		return {
			menu: [
				{ title: 'home', href: '/#home' },
				{ title: 'design', href: '/#design' },
				{ title: 'dev', href: '/#dev' },
				{ title: 'projects', href: '/#projects' },
				{ title: 'about', href: '/#about' },
				{ title: 'instagram', href: 'https://instagram.com/siplhes', target: true },
			],
		}
	},
}
</script>
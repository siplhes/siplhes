<template>
	<nav class="w-10/12 h-10 flex justify-between items-center fixed top-0 py-8 z-30 max-w-screen-xl 
		sm:max-w-screen-xl sm:w-10/12 sm:flex-col sm:h-auto sm:items-end sm:text-right sm:p-0
		 p-4 rounded-lg  md:bg-transparent bg-transparent
		">
		<span class="w-3/12 mr-3 sm:mr-0 sm:h-11" />
		<ul class="flex flex-1 justify-between sm:flex-col sm:mt-2 sm:gap-4 space-x-4">
			<li v-for="(section, index) in menu" :key="index"
				class="text-white uppercase font-normal text-lg sm:text-xl sm:mt-2 md:text-2xl ">
				<a :href="section.href" :target="section.target ? '_blank' : ''" :class="{ resume: section.target }">{{
					section.title }}</a>
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
				{ title: 'desing', href: '/#design' },
				{ title: 'dev', href: '/#dev' }, { title: 'projects', href: '/#projects' },
				{ title: 'about', href: '/#about' },
				{ title: 'instagram', href: 'https://instagram.com/siplhes', target: true },
			],
		}
	},
}
</script>

<style scoped>
@media screen and (max-width: 640px) {
	.resume {
		display: none;
	}
}

@media screen and (min-width: 640px) {
	nav {
		background: transparent;
	}

	span {
		height: 4.25rem;
		width: 1px;
	}
}

@media screen and (max-width: 320px) {
	span {
		display: none;
	}
}
</style>

<template>
	<section id="home"
		class="text-white pt-24 sm:min-h-0 h-auto lg:pt-4 text-lg sm:text-xl lg:text-2xl sm:w-10/12 lg:w-8/12">

		<div class="grid  grid-cols-1 gap-4 max-md:justify-center">
			<div class="flex items-center max-sm:flex-col bg-transparent gap-4 rounded-lg 
				 hover:scale-[1.02] transition-all">
				<img src="../assets/me.webp"
					class="w-full lg:h-2/5 object-cover rounded-full" />
				<div class="p-4">
					<h1 class="text-xl sm:text-6xl md:text-3xl lg:text-4xl">
						Hello, I am<br>
						<span class="text-6xl font-bold my-1 sm:text-6xl md:text-5xl lg:text-6xl text-yellow-500">
							Joseph Hurtado
						</span>
					</h1>
					<p class="mt-4 leading-relaxed ">
						A driven web developer seeking to expand my skills and knowledge. My ultimate goal is to master full-stack development, while also exploring app and videogame development.
					</p>
				</div>
			</div>
		</div>
		<div class="flex justify-center mt-6 space-x-6">
			<a v-for="(social, index) in socialNetwork" :key="index" :href="social.link" target="_blank"
				class="text-6xl text-white hover:text-yellow-500 p-2 rounded-full">
				<FontAwesomeIcon :icon="`fa-brands fa-${social.icon}`" />
			</a>
		</div>
	</section>
</template>
<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
</script>

<script>
export default {
	name: 'Introduction',
	data() {
		return {
			socialNetwork: [
				{
					icon: 'twitter',
					link: 'https://twitter.com/siplhesx',
				},
				{
					icon: 'github',
					link: 'https://github.com/siplhes',
				},
				{
					icon: 'facebook',
					link: 'https://fb.com/siplhes',
				},
				{
					icon: 'whatsapp',
					link: 'https://wa.me/584127698781',
				},
				{
					icon: 'instagram',
					link: 'https://instagram.com/siplhes',
				},

			],
		}
	},
}
</script>
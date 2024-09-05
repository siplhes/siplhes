<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const go = (route) => {
	router.push(route)
}

const projects = [
	{
		img: 'https://nsfwclothes.store/images/welcomebg.webp',
		title: 'nsfwclothes.store website',
		resume: 'Web store for NSFW clothes, appareals and accessories.',
		url: 'https://nsfwclothes.store/',
		more: '/nsfwclothes#project',
	},
	{
		img: 'https://i.imgur.com/S003Xob.jpeg',
		title: 'Book-a-Choose',
		resume: 'Social platform for writers and readers to share their stories.',
		url: 'https://book-a-choose.vercel.app/',
		more: '/nsfwclothes',
	},
]

</script>

<template>
	<section id="projects" class="text-white sm:min-h-0 h-auto pt-28 sm:pt-32 sm:w-10/12 ">
		<h2 class="uppercase font-bold text-xl mb-6 sm:text-2xl md:text-3xl lg:text-4xl text-yellow-500">
			Projects
		</h2>
		<div class="grid sm:grid-cols-1 lg:grid-cols-3 gap-5">
			<div v-for="(project, index) in projects" :key="index"
				class="project-img relative overflow-hidden max-w-xl sm:w-96 sm:h-52 md:w-10/12 md:max-w-md lg:h-52 lg:max-w-xl lg:w-full">
				<img :src="project.img" class=" project-img object-cover h-full w-full" />
				<div
					class="bg-yellow-500 text-slate-900 project-info absolute top-0 w-full h-full text-sm px-6 justify-center flex flex-col sm:text-base md:px-10">
					<p class="text-lg sm:text-xl font-bold uppercase">
						{{ project.title }}
					</p>
					<p class="italic font-semibold">{{ project.resume }}</p>
					<div class="flex justify-between mt-8">
						<button class="border border-slate-900 font-semibold text-center p-1 
						rounded w-16 hover:bg-slate-900  hover:text-yellow-500 sm:w-20">
							<a :href="project.url" target="_blank">View</a>
						</button>

						<RouterLink :to="project.more">Read more</RouterLink>

					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped>
.project-info {

	transform: translateY(-100%);
	transition: transform 0.4s ease-in-out;
}

.project-img:hover .project-info {
	transform: translateY(0);
}
</style>
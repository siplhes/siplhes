<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const go = (route) => {
	router.push(route)
}

const projects = [
	{
		img: 'https://i.imgur.com/dEjO2t5.png',
		title: 'nsfwclothes.store website',
		resume: 'Web store for NSFW clothes, appareals and accessories.',
		url: 'https://nsfwclothes.store/',
		more: '/nsfwclothes#project',
	},
	{
		img: 'https://i.imgur.com/S003Xob.jpeg',
		title: 'Book-a-Choose',
		resume: 'Social platform for writers and readers to share their stories.',
		url: '/bookachoose#sorry',
		more: '/bookachoose#project',
	},
]

</script>

<template>
	<section id="projects" class="text-white sm:min-h-0 h-auto pt-28 sm:pt-32 sm:w-10/12 ">
		<h2 class="uppercase font-bold text-xl mb-6 sm:text-2xl md:text-3xl lg:text-4xl text-yellow-500">
			Projects
		</h2>


		<div v-for="(project, index) in projects" :key="index" class="max-w-4xl space-y-6">
			<div class="card max-w-6xl lg:mr-[20%] hover:bg-slate-950/20 mb-4">
				<div class="grid grid-cols-1 lg:grid-cols-2">
					<div>
						<figure>
							<img :src="project.img" class="w-full h-64 object-scale-down" alt="Movie" />
						</figure>
					</div>
					<div>
						<div class="card-body">
							<h2 class="card-title text-semibold text-yellow-500 sm:text-xl font-bold uppercase">{{ project.title }}</h2>
							<p class="italic font-semibold">{{ project.resume }}</p>


						</div>
						<div class="card-actions justify-end p-4">
							<button class="border border-slate-900 font-semibold text-center p-1 
						rounded w-16 bg-yellow-500 text-slate-900 hover:bg-yellow-600  sm:w-20">
								<a :href="project.url" target="_blank">View</a>
							</button>

							<RouterLink class="border border-slate-900 font-semibold text-center p-1 
						rounded w-fit bg-yellow-500 text-slate-900 hover:bg-yellow-600   sm:w-20" :to="project.more">About</RouterLink>
						</div>


					</div>
				</div>

			</div>
		</div>


		<!--<div class="grid sm:grid-cols-1 lg:grid-cols-3 gap-5">
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

						<RouterLink class="border border-slate-900 font-semibold text-center p-1 
						rounded w-fit hover:bg-slate-900  hover:text-yellow-500 sm:w-20" :to="project.more">About</RouterLink>

					</div>
				</div>
			</div>		</div>
-->


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
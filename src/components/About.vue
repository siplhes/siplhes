<template>
	<section id="about" class="text-black sm:min-h-0 h-auto sm:w-10/12 lg:w-8/12 pt-20">
		<div  class=" bg-yellow-500 rounded-lg p-4">
			<h2 class="uppercase font-bold text-xl mb-5 sm:text-2xl md:text-3xl lg:text-4xl">
				About me
			</h2>
			<ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
				<li v-for="item in item">
					<div class="timeline-middle">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
							<path fill-rule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
								clip-rule="evenodd" />
						</svg>
					</div>
					<div
						:class="`timeline-${item.position} mb-10 md:text-${item.position === 'start' ? 'end' : 'start'}`">
						<time class="font-mono italic">{{ item.year }}</time>
						<div class="text-lg font-black">{{ item.title }}</div>
						{{ item.resume }}
					</div>
					<hr />
				</li>
			</ul>
		</div>
	</section>
</template>

<script>
export default {
	name: 'About',
	data() {
		return {
			item: [
  {
    position: 'start',
    title: 'The Making of Me',
    resume: 'Born in 1995.',
    year: '1995',
  },
  {
    position: 'end',
    title: 'Bachelor of Science',
    resume: 'Graduated from U.E Gnrl. Eduardo Perez in 2013.',
    year: '2013',
  },
  {
    position: 'start',
    title: 'Graphic Design Studies',
    resume: 'Pursued graphic design studies at Dr. Belloso Chacin University in 2016. Due to the challenging situation in Venezuela, I was forced to pause my studies in 2017 and relocate.',
    year: '2016',
  },
]

			,
		}
	},
}
</script>

<template>
	<section id="home"
		class="text-white pt-28 sm:min-h-0 h-auto sm:pt-32 text-lg sm:text-xl lg:text-2xl sm:w-10/12 lg:w-8/12">
		<div class="grid grid-cols-3 space-x-2 items-center">
			<img src="https://zstudios.s3.sa-east-1.amazonaws.com/321504501_1190919398193087_37709.png"
				class="h-44 sm:h-22 rounded-md">

			<p class="text-xl sm:text-6xl md:text-3xl lg:text-4xl anim_1" ref="anim_1">
				Hello, I am
			<transition name="fade">
				<h1 class="text-6xl font-bold my-1
					 sm:text-6xl md:text-5xl lg:text-6xl text-yellow-500 anim_2
				" ref="anim_2">Joseph Hurtado
				</h1>
			</transition>
		</p>
		</div>
		<p class="mt-12 leading-relaxed anim_3" ref="anim_3">
			A <span class="font-medium">passionate web developer</span> who wants to learn so much more and reach new
			levels of knowledge. with the goal of Full-Stack Development,
			<span class="font-medium">App Development</span> and
			<span class="font-medium">Videogames Development.</span>
		</p>

		<div class="flex justify-center mt-12 space-x-6 anim_4" ref="anim_4">
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
					link: 'https://twitter.com/s1plhes',
				},
				{
					icon: 'github',
					link: 'https://github.com/siplhes',
				},
				{
					icon: 'facebook',
					link: 'https://fb.com/siplhes',
				},

			],
		}
	},
	mounted() {
		let timer = setInterval(() => {
			this.$refs.anim_1.classList.add('fade')
			stopTimer()
		}, 80)
		const stopTimer = () => {
			this.$refs.anim_2.classList.add('rightToLeft')
			this.$refs.anim_3.classList.add('rightToLeft')
			this.$refs.anim_4.classList.add('fade')
			this.$refs.anim_5.classList.add('fade')
			this.$refs.anim_6.classList.add('fade')
			clearInterval(timer)
			timer = null
		}
	},
}
</script>

<style scoped>
.chevron {
	animation-duration: 0.8s;
	animation-name: bounce;
	animation-iteration-count: infinite;
	animation-direction: alternate;
}

.anim_1,
.anim_2,
.anim_3,
.anim_4,
.anim_5,
.anim_6 {
	transition: all 0.5s ease;
}

.anim_1.fade {
	transition-delay: 0.25s;

}

.anim_2.rightToLeft {

	transition-delay: 0.5s;
	transform: translateX(0px);
}

.anim_3.rightToLeft {

	transition-delay: 1s;
	transform: translateX(0px);
}

.anim_4.fade {

	transition-delay: 1.5s;
}

.anim_5.fade,
.anim_6.fade {

	transition-delay: 1.75s;
}

@keyframes bounce {
	from {
		transform: translateY(0);
	}

	to {
		transform: translateY(20px);
	}
}

@media (max-width: 320px) {
	.chevron {
		display: none;
	}

	h2 {
		font-size: 20px;
	}
}

/*
p {
text-emphasis: "🔥";


npm install --save '@awesome.me/kit-d3b28d8366@latest'
}*/
</style>
<template>
	<!-- <div class="slider">
		<div class="slides" :style="{ transform: 'translateX(' + slideIndex * -25 + '%)' }">
			<div class="slide">
				<img src="../assets/img/presentpage/Музыка-(Интересы).gif" alt="Slide 1 Image 1">
				<img src="../assets/img/presentpage/Музыка-(Интересы).gif" alt="Slide 1 Image 2">
			</div>
			<div class="slide">
				<img src="../assets/img/presentpage/Музыка-(Интересы).gif" alt="Slide 1 Image 1">
				<img src="../assets/img/presentpage/Музыка-(Интересы).gif" alt="Slide 1 Image 2">
			</div>
			<div class="slide">
				<img src="../assets/img/presentpage/Музыка-(Интересы).gif" alt="Slide 1 Image 1">
				<img src="../assets/img/presentpage/Музыка-(Интересы).gif" alt="Slide 1 Image 2">
			</div>
			<div class="slide">
				<img src="../assets/img/presentpage/Музыка-(Интересы).gif" alt="Slide 1 Image 1">
				<img src="../assets/img/presentpage/Музыка-(Интересы).gif" alt="Slide 1 Image 2">
			</div>
		</div>
		<div class="dots">
			<span v-for="(dot, index) in 4" :key="index" class="dot" :class="{ active: index === slideIndex }"
				@click="goToSlide(index)"></span>
		</div>
	</div> -->
</template>
  
<script>
/* export default {
	data() {
		return {
			slides: [
				url('../assets/img/presentpage/Музыка-(Интересы).gif'),
				'Slide 2',
				'Slide 3',
				'Slide 4'
			],
			activeSlide: 0,
			translateX: 0
		};
	},
	methods: {
		setActiveSlide(index) {
			this.activeSlide = index;
			this.translateX = index * -100;
		}
	}
}; */
</script>

<style scoped lang="scss">
/* .slider {
	position: relative;
	width: 100%;
	height: 300px;
	overflow: hidden;

	.slides {
		display: flex;
		transition: transform 0.3s ease-in-out;
		width: 400%;

		.slide {
			flex: 1;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 48px;
		}
	}

	.dots {
		position: absolute;
		bottom: 20px;
		left: 50%;
		transform: translateX(-50%);
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 10;

		.dot {
			width: 10px;
			height: 10px;
			border-radius: 50%;
			background-color: #bbb;
			margin: 0 5px;
			cursor: pointer;

			&.active {
				background-color: #333;
			}
		}
	}
} */
</style>
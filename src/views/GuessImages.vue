<template>
	<div class="user-container">
		<SliderThird class="slider-third"/>
	
		<div class="attemps px-3 mb-1">
			<span>Смайлы </span>
			<span>| Угадать изображений: 4</span>
		</div>

		<div class="category-container px-3">
			<b-row class="m-0">
				<b-col class="col-block" v-for="(block, index) in guessImages" :key="index">
					<div class="img-block" :class="{ active: block.isActive }" @click="toggleBlock(block)">
						<img :src="block.imageSrc" :alt="block.altText">
					</div>
				</b-col>
			</b-row>
		</div>

		<MenuBlock />
	</div>
</template>

<script>
	import SliderThird from '../components/SliderThird.vue';
	import MenuBlock from '../components/MenuBlock.vue';

	export default {
		name: 'GuessImages',

		components: {
			SliderThird,
			MenuBlock,
		},

		data() {
			return {
				guessImages: [
					{
						imageSrc: require("../assets/img/emoji/scream.png"),
						altText: "spaggeti",
						isActive: false,
					},
					{
						imageSrc: require("../assets/img/emoji/relax.png"),
						altText: "salat",
						isActive: false,
					},
					{
						imageSrc: require("../assets/img/emoji/lover.png"),
						altText: "ikra",
						isActive: false,
					},
					{
						imageSrc: require("../assets/img/emoji/cool.png"),
						altText: "ikra",
						isActive: false,
					},
					{
						imageSrc: require("../assets/img/emoji/beauty.png"),
						altText: "ikra",
						isActive: false,
					},
				],
			};
		},

		computed: {
			hasActiveFood() {
				return this.foodBlocks.some(block => block.isActive);
			},
		},

		methods: {
			toggleBlock(block) {block.isActive = !block.isActive;},
		}
	};
</script>
  
<style scoped lang="scss">
	@import '../assets/extend';
	@import '../assets/vars';

	.user-container {
		@extend %mainWrapper;
		justify-content: flex-start;
		padding: 0;
		font-size: 18px;
		position: relative;
		max-width: 425px;

		.slider-third{margin-bottom: 20px;}

		.attemps{
			font-size: 12px;
			>span:last-of-type{color: #6dc695;}
			@media screen and (min-width: 410px){
				font-size: 14px;
			}
		}

		.category-container {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			justify-content: center;
			margin-bottom: 100px;

			.col-block{
				padding: 0!important;
				&:not(:last-of-type){margin-right: 10px;}
			}

			.img-block {
				background-color: #f1f1f1;
				border-radius: 10px;
				height: 80px;
				width: 100%;
				cursor: pointer;
				display: flex;
				align-items: center;

				@media screen and (max-width: 400px){
					&{height: 70px;}
				}

				@media screen and (max-width: 325px){
					&{height: 50px;}
				}

				>img{width: inherit;}
				&.active {background-color: #339860;}
			}
		}
	}
</style>
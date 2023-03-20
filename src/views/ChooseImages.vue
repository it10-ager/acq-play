<template>
	<div class="images-select">
		<!--Title for page-->
		<div class="text-center title">Выберите от 1 картинки</div>

		<!--Images-->
		<div class="category-container">
			<div class="category-title mb-1 w-100">Еда</div>
			<b-row class="mb-1 px-2">
				<b-col class="col-block" v-for="(block, index) in foodBlocks" :key="index">
					<div class="img-block" :class="{ active: block.isActive }" @click="toggleBlock(block)">
						<img :src="block.imageSrc" :alt="block.altText">
					</div>
				</b-col>
			</b-row>

			<div class="category-title mb-1 w-100">Напиток</div>
			<b-row class="mb-1 px-2">
				<b-col class="col-block" v-for="(block, index) in drinkBlocks" :key="index">
					<div class="img-block" :class="{ active: block.isActive }" @click="toggleBlock(block)">
						<img :src="block.imageSrc" :alt="block.altText">
					</div>
				</b-col>
			</b-row>

			<div class="category-title mb-1 w-100">Отдых</div>
			<b-row class="px-2">
				<b-col class="col-block" v-for="(block, index) in restBlocks" :key="index">
					<div class="img-block" :class="{ active: block.isActive }" @click="toggleBlock(block)">
						<img :src="block.imageSrc" :alt="block.altText">
					</div>
				</b-col>
			</b-row>
		</div>

		<!--Main block to next page-->
		<b-row class="join d-flex justify-content-center my-2" v-if="hasActiveFood || hasActiveDrink || hasActiveRest">
			<b-col>
				<div class="next-block" @click="goToNextProfilePage()">
					<span class="w-100 text-center">Далее</span>
					<img src="../assets/img/elements/arrows-11.png" alt="arrow-right">
				</div>
			</b-col>
		</b-row>
	</div>
</template>
  
<script>
	export default {
		name: 'ChooseImages',
		data() {
			return {
				foodBlocks: [
					{
						imageSrc: require("../assets/img/food/spaggeti.png"),
						altText: "spaggeti",
						isActive: false,
					},
					{
						imageSrc: require("../assets/img/food/salat.png"),
						altText: "salat",
						isActive: false,
					},
					{
						imageSrc: require("../assets/img/food/ikra.png"),
						altText: "ikra",
						isActive: false,
					},
				],

				drinkBlocks: [
					{
						imageSrc: require("../assets/img/food/spaggeti.png"),
						altText: "spaggeti",
						isActive: false,
					},
					{
						imageSrc: require("../assets/img/food/salat.png"),
						altText: "salat",
						isActive: false,
					},
					{
						imageSrc: require("../assets/img/food/ikra.png"),
						altText: "ikra",
						isActive: false,
					},
				],

				restBlocks: [
					{
						imageSrc: require("../assets/img/food/spaggeti.png"),
						altText: "spaggeti",
						isActive: false,
					},
					{
						imageSrc: require("../assets/img/food/salat.png"),
						altText: "salat",
						isActive: false,
					},
					{
						imageSrc: require("../assets/img/food/ikra.png"),
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
			hasActiveDrink() {
				return this.drinkBlocks.some(block => block.isActive);
			},
			hasActiveRest() {
				return this.restBlocks.some(block => block.isActive);
			},
		},

		methods: {
			toggleBlock(block) {block.isActive = !block.isActive;},
			goToNextProfilePage(){this.$router.push('/download-user-photo');}
		},
	};
</script>
  
<style scoped lang="scss">
	@import '../assets/extend';
	@import '../assets/vars';

	.images-select {
		@extend %mainWrapper;
		font-size: 18px;

		.title {
			@extend %titleFont;
			font-size: 38px;
		}

		.category-container {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			justify-content: center;
			margin-bottom: 50px;

			.col-block{
				padding: 0!important;
				&:not(:last-of-type){margin-right: 15px;}
			}

			.img-block {
				background-color: #f1f1f1;
				border-radius: 10px;
				height: 120px;
				width: 100%;
				cursor: pointer;
				display: flex;
				align-items: center;

				@media screen and (max-width: 400px){
					&{height: 110px;}
				}

				@media screen and (max-width: 325px){
					&{height: 90px;}
				}

				>img{width: inherit;}
				&.active {background-color: #339860;}
			}
		}

		.join {
			.next-block {
				@extend %mainBtnNextPage;
				margin-bottom: 40px;
			}
		}
	}
</style>
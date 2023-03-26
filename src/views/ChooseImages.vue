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
			<b-col class="p-0">
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
		max-width: inherit;
		@media screen and (max-width: 415px){justify-content: center;}
		
		.title {
			@extend %titleFont;
			margin: 5% 0 5%;
		}

		.category-container {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			justify-content: center;
			margin-bottom: 7%;

			.col-block{
				padding: 0!important;
				&:not(:last-of-type){margin-right: 15px;}
			}

			.img-block {
				-webkit-box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.25);
				-moz-box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.25);
				box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.25);
				background-image: -moz-linear-gradient(-60deg, #f1f1f1 55%, rgb(255, 255, 255) 150%);
				background-image: -webkit-linear-gradient(-60deg, #f1f1f1 55%, rgb(255, 255, 255) 150%);
				background-image: -ms-linear-gradient(-60deg, #f1f1f1 55%, rgb(255, 255, 255) 150%);
				background-image: linear-gradient(-60deg, #f1f1f1 55%, rgb(255, 255, 255) 150%);
				border-radius: 10px;
				border-style: solid;
				border-width: 1px;
				border-color: rgb(204, 204, 204);
				height: 90px;
				width: 100%;
				cursor: pointer;
				display: flex;
				align-items: center;

				@media screen and (min-width: 335px){
					height: 100px;
				}

				@media screen and (min-width: 400px){
					height: 120px;
				}

				@media screen and (min-width: 450px){
					height: 140px;
				}

				>img{width: inherit;}
				&:hover{
					background-image: -moz-linear-gradient(-60deg, #3cb371 55%, rgb(255, 255, 255) 150%);
					background-image: -webkit-linear-gradient(-60deg, #3cb371 55%, rgb(255, 255, 255) 150%);
					background-image: -ms-linear-gradient(-60deg, #3cb371 55%, rgb(255, 255, 255) 150%);
					background-image: linear-gradient(-60deg, #3cb371 55%, rgb(255, 255, 255) 150%);
					
				}
				&.active {
					background-image: -moz-linear-gradient(-60deg, #339860 55%, rgb(255, 255, 255) 150%);
					background-image: -webkit-linear-gradient(-60deg, #339860 55%, rgb(255, 255, 255) 150%);
					background-image: -ms-linear-gradient(-60deg, #339860 55%, rgb(255, 255, 255) 150%);
					background-image: linear-gradient(-60deg, #339860 55%, rgb(255, 255, 255) 150%);
				}
			}
		}

		.join {
			@extend %width;
			.next-block {
				@extend %mainBtnNextPage;
			}
		}
	}
</style>
<template>
	<div class="images-select">
		<!--go back-->
		<div class="back-page">
			<span @click="goToProfile">Вернуться назад</span>
		</div>

		<!--Images-->
		<div class="category-container">
			<div class="category-title mb-1 w-100">
				<span>Питание</span>
			</div>
			
			<div class="block-container">
				<b-col class="col-block" v-for="(block, index) in foodBlocks" :key="index">
					<div class="img-block" :class="{ active: block.isActive }" @click="toggleBlock(block)">
						<img :src="block.imageSrc" :alt="block.altText">
					</div>
				</b-col>
			</div>

			<div class="category-title mb-1 w-100">
				<span>Отдых</span>
			</div>
			
			<div class="block-container">
				<b-col class="col-block" v-for="(block, index) in restBlocks" :key="index">
					<div class="img-block" :class="{ active: block.isActive }" @click="toggleBlock(block)">
						<img :src="block.imageSrc" :alt="block.altText">
					</div>
				</b-col>
			</div>

			<div class="category-title mb-1 w-100">
				<span>Страна</span>
			</div>
			
			<div class="block-container">
				<b-col class="col-block" v-for="(block, index) in countryBlocks" :key="index">
					<div class="img-block" :class="{ active: block.isActive }" @click="toggleBlock(block)">
						<img :src="block.imageSrc" :alt="block.altText">
					</div>
				</b-col>
			</div>

			
		</div>

		<MenuBlock/>
	</div>
</template>
  
<script>
	import MenuBlock from '../components/MenuBlock.vue';

	export default {
		name: 'SavedImages',
		components: {
			MenuBlock,
		},	
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
					{
						imageSrc: require("../assets/img/food/ikra.png"),
						altText: "ikra",
						isActive: false,
					},
				],

				countryBlocks: [
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
					{
						imageSrc: require("../assets/img/food/ikra.png"),
						altText: "ikra",
						isActive: false,
					},
					{
						imageSrc: require("../assets/img/food/ikra.png"),
						altText: "ikra",
						isActive: false,
					},
				],

				/* drinkBlocks: [
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
					{
						imageSrc: require("../assets/img/food/ikra.png"),
						altText: "ikra",
						isActive: false,
					},
				], */

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
			goToProfile(){this.$router.push('/my-profile');}
		},
	};
</script>
  
<style scoped lang="scss">
	@import '../assets/extend';
	@import '../assets/vars';

	.images-select {
		@extend %mainWrapper;
		justify-content: flex-start;
		font-size: 14px;
		max-width: inherit;
		@media screen and (min-width: 410px){font-size: 16px;}

		.back-page{
			margin-bottom: 10px;
			>span{cursor: pointer;}
		}

		.category-container {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			justify-content: center;
			margin-bottom: 150px;

			.category-title{
				border-bottom: 1px solid #6dc695;
				>span{color: #6dc695};
			}

			.block-container{
				display: grid;
				grid-template-columns: repeat(4, 1fr);
				gap: 5px;
				margin-bottom: 5px;

				@media screen and (min-width: 410px){
					grid-template-columns: repeat(5, 1fr);
					gap: 7px;
				}

				.col-block{
					padding: 0!important;
					/* &:not(:last-of-type){margin-right: 5px;} */
					
					.img-block {
						background-color: #f1f1f1;
						border-radius: 10px;
						height: 65px;
						width: 65px;
						cursor: pointer;
						display: flex;
						align-items: center;
						@media screen and (min-width: 410px){
							height: 68px;
							width: 68px;
						}
						&:hover{background: $bgMain;}
						>img{width: inherit;}
						&.active {background-color: #339860;}
					}
				}
			}
		}

		.save {
			.save-block {
				@extend %mainBtnNextPage;
				margin-bottom: 40px;
			}
		}
	}
</style>
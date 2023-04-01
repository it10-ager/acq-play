<template>
	<div class="images-select">
		<!--go back-->
		<div class="back-page">
			<span @click="goToProfile">Вернуться назад</span>
		</div>

		<!--Images-->
		<div class="category-container">
			<div class="category-title mb-1 w-100">
				<span>Питание | Осталось выбрать изображений: 4</span>
			</div>
			
			<div class="block-container">
				<b-col class="col-block" v-for="(block, index) in foodBlocks" :key="index">
					<div class="img-block" :class="{ active: block.isActive }" @click="toggleBlock(block)">
						<img :src="block.imageSrc" :alt="block.altText">
					</div>
				</b-col>
			</div>
		</div>

		<!--Main block to next page-->
		<b-row class="save d-flex justify-content-center my-2">
			<b-col class="p-0">
				<div class="save-block" @click="goToSave">
					<span class="w-100 text-center">Сохранить</span>
					<img src="../assets/img/elements/arrows-11.png" alt="arrow-right">
				</div>
			</b-col>
		</b-row>

		<MenuBlock/>
	</div>
</template>
  
<script>
	import MenuBlock from '../components/MenuBlock.vue';

	export default {
		name: 'ChooseProfileImages',
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
					{
						imageSrc: require("../assets/img/food/ikra.png"),
						altText: "ikra",
						isActive: false,
					},
				],
			};
		},

		methods: {
			toggleBlock(block) {block.isActive = !block.isActive;},
			goToSave(){this.$router.push('/saved');},
			goToProfile(){this.$router.push('/my-profile');},
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
						-webkit-box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.25);
						-moz-box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.25);
						box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.25);
						background-image: -moz-linear-gradient(-60deg, #f1f1f1 55%, rgb(255, 255, 255) 150%);
						background-image: -webkit-linear-gradient(-60deg, #f1f1f1 55%, rgb(255, 255, 255) 150%);
						background-image: -ms-linear-gradient(-60deg, #f1f1f1 55%, rgb(255, 255, 255) 150%);
						background-image: linear-gradient(-60deg, #f1f1f1 55%, rgb(255, 255, 255) 150%);
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
			}
		}

		.save {
			@extend %width;
			.save-block {
				@extend %mainBtnNextPage;
			}
		}
	}
</style>
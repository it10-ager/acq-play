<template>
	<div class="user-container">
		<SliderThird class="slider-third"/>
	
		<div class="attemps px-3 mb-1">
			<span>Смайлы </span>
			<span>| Угадать изображений: 4</span>
		</div>

		<div class="category-container px-3">
			<b-row class="m-0">
				<b-col class="col-block">
					<div class="img-block choose-block" :class="{ active: block1.isActive }" @click="toggleBlock(block1)">
						<img src="../assets/img/emoji/scream.png" alt="scream">
					</div>
				</b-col>

				<b-col class="col-block">
					<div class="img-block checked" @click="goToSuccess">
						<img src="../assets/img/elements/check_mark.png" alt="relax">
					</div>
				</b-col>

				<b-col class="col-block">
					<div class="img-block checked">
						<img src="../assets/img/elements/check_mark.png" alt="lover">
					</div>
				</b-col>

				<b-col class="col-block">
					<div class="img-block loss" @click="goToLoss">
						<img src="../assets/img/elements/cross.png" alt="cool">
					</div>
				</b-col>

				<b-col class="col-block">
					<div class="img-block loss" @click="goToTimer">
						<img src="../assets/img/elements/cross.png" alt="beauty">
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
				block1: {isActive: false},
			};
		},

		methods: {
			toggleBlock(block) {block.isActive = !block.isActive;},
			goToSuccess(){return this.$router.push('/success');},
			goToLoss(){return this.$router.push('/loss');},
			goToTimer(){return this.$router.push('/timer');},
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
		position: relative;
		max-width: inherit;

		.slider-third{margin-bottom: 2%;}

		.attemps{
			font-size: 12px;
			>span:last-of-type{color: #6dc695;}
			@media screen and (min-width: 410px){font-size: 14px;}
		}

		.category-container {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			justify-content: center;
			margin-bottom: 18%;

			.col-block{
				padding: 0!important;
				&:not(:last-of-type){margin-right: 10px;}
			}

			.img-block {
				border-radius: 10px;
				height: 50px;
				width: 100%;
				cursor: pointer;
				display: flex;
				align-items: center;
				
				&.choose-block{
					-webkit-box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.25);
					-moz-box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.25);
					box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.25);
					background-image: -moz-linear-gradient(-60deg, #f1f1f1 55%, rgb(255, 255, 255) 150%);
					background-image: -webkit-linear-gradient(-60deg, #f1f1f1 55%, rgb(255, 255, 255) 150%);
					background-image: -ms-linear-gradient(-60deg, #f1f1f1 55%, rgb(255, 255, 255) 150%);
					background-image: linear-gradient(-60deg, #f1f1f1 55%, rgb(255, 255, 255) 150%);

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

				@media screen and (min-width: 325px){height: 60px;}
				@media screen and (min-width: 400px){height: 70px;}
				@media screen and (min-width: 500px){height: 85px;}

				>img{width: inherit;}

				&.checked{
					background-color: #6dc695;
					-webkit-box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.25);
					-moz-box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.25);
					box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.25);
				}

				&.loss{
					justify-content: center;
					background-color: $errorColor;
					>img{width: 40px;}
				}
			}
		}
	}
</style>
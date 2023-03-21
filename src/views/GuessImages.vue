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
					<div class="img-block" :class="{ active: block1.isActive }" @click="toggleBlock(block1)">
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
		font-size: 18px;
		position: relative;
		max-width: 425px;

		.slider-third{margin-bottom: 20px;}

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
			margin-bottom: 100px;

			.col-block{
				padding: 0!important;
				&:not(:last-of-type){margin-right: 10px;}
			}

			.img-block {
				background-color: #f1f1f1;
				border-radius: 10px;
				height: 70px;
				width: 100%;
				cursor: pointer;
				display: flex;
				align-items: center;

				@media screen and (max-width: 400px){
					&{height: 60px;}
				}

				@media screen and (max-width: 325px){
					&{height: 50px;}
				}

				>img{width: inherit;}
				&.active {background-color: #339860;}
				&.checked{background-color: #6dc695;}
				&.loss{
					justify-content: center;
					background-color: $errorColor;
					>img{width: 40px;}
				}
			}
		}
	}
</style>
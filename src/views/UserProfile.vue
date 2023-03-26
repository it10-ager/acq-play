<template>
	<div class="user-container">
		<SliderThird class="slider-third" />

		<b-row class="message-user d-flex justify-content-center my-2" @click="goToMessageUser()">
			<b-col class="col-block">
				<div class="next-block">
					<span class="w-100 text-center">Написать</span>
					<img src="../assets/img/elements/arrows-11.png" alt="arrow-right">
				</div>
			</b-col>
		</b-row>

		<!--Title for page-->
		<div class="text-center title mb-3">Картинки</div>

		<div class="attemps">
			<div class="main-image">
				<div class="name">
					<span>Смайлы </span>
				</div>
				<b-row class="m-0 w-100">
					<b-col class="col-block">
						<div class="img-block">
							<img src="../assets/img/emoji/scream.png" alt="scream">
						</div>
					</b-col>
				</b-row>
			</div>

			<div class="main-image">
				<div class="name">
					<span>Алкоголь</span>
				</div>
				<b-row class="m-0 w-100">
					<b-col class="col-block">
						<div class="img-block">
							<img src="../assets/img/food/beer.png" alt="beer">
						</div>
					</b-col>
				</b-row>
			</div>

			<div class="main-image">
				<div class="name">
					<span>Еда</span>
				</div>
				<b-row class="m-0 w-100">
					<b-col class="col-block">
						<div class="img-block">
							<img src="../assets/img/food/spaggeti.png" alt="spaggeti">
						</div>
						<div class="img-block">
							<img src="../assets/img/food/salat.png" alt="salat">
						</div>
						<div class="img-block">
							<img src="../assets/img/food/ikra.png" alt="ikra">
						</div>
					</b-col>
				</b-row>
			</div>

			<div class="main-image">
				<div class="name">
					<span>Безалкогольные напитки</span>
				</div>
				<b-row class="m-0 w-100">
					<b-col class="col-block">
						<div class="img-block">
							<img src="../assets/img/food/latte.png" alt="latte">
						</div>
						<div class="img-block">
							<img src="../assets/img/food/juice.png" alt="juice">
						</div>
					</b-col>
				</b-row>
			</div>

			<div class="main-image">
				<div class="name">
					<span>Европа </span>
				</div>
				<b-row class="m-0 w-100">
					<b-col class="col-block">
						<div class="img-block">
							<img src="../assets/img/food/russia.png" alt="russia">
						</div>
					</b-col>
				</b-row>
			</div>
		</div>

		<MenuBlock />
	</div>
</template>

<script>
	import SliderThird from '../components/SliderThird.vue';
	import MenuBlock from '../components/MenuBlock.vue';

	export default {
		name: 'UserProfile',
		components: {
			SliderThird,
			MenuBlock,
		},

		methods: {
			goToMessageUser(){
				this.$router.push('/correspondence')
			}
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
		max-width: inherit;

		.slider-third{margin-bottom: 40px;}

		.message-user {
			width: 85%;
			margin: 0 auto;

			.col-block{
				padding: 0!important;
				.next-block {
					@extend %mainBtnNextPage;
					margin-bottom: 20px
				}
			}
		}

		.title {
			@extend %titleFont;
			margin: 0;
			font-size: 30px;

			@media screen and (min-width: 410px){
				font-size: 36px;
			}
		}

		.attemps{
			margin-bottom: 120px;
			padding: 0 20px;

			@media screen and (min-width: 410px){padding: 0 30px;}

			.name{
				margin-bottom: 5px;
				font-size: 14px;
			}

			.main-image{
				display: flex;
				flex-direction: column;
				align-items: flex-start;
				margin-bottom: 5px;

				.col-block{
					width: 100%;
					display: flex;
					padding: 0!important;
					&:not(:last-of-type){margin-right: 10px;}
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
					height: 80px;
					width: 80px;
					cursor: pointer;
					display: flex;
					align-items: center;
					&:not(:last-of-type){margin-right: 10px;}
					>img{width: inherit;}
				}
			}
		}
	}
</style>
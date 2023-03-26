<template>
	<div class="user-container">
		<div class="success-main">
			<div class="title">
				<span>В СЛЕДУЮЩИЙ РАЗ!</span>
			</div>

			<div class="navigation">
				<div class="view-profile">
					<span>Смотреть<br>рекламу</span>
				</div>
				<div class="premium">
					<span>9</span>
					<img src="../assets/img/elements/Ic_favorite_outline.png" alt="premium">
				</div>
				<div class="next-profile">
					<span @click="goToNextProfile">Следующий<br>профиль</span>
				</div>
			</div>
		</div>
			
		<div class="attemps">
			<div class="main-image">
				<div class="name">
					<span>Смайлы </span>
					<span>| Угадать: 1</span>
				</div>
				<b-row class="m-0 w-100">
					<b-col class="col-block">
						<div class="img-block">
							<img src="../assets/img/emoji/scream.png" alt="scream">
						</div>
						<div class="img-block question">
							<img src="../assets/img/elements/question.png" alt="scream">
						</div>
					</b-col>
				</b-row>
			</div>

			<div class="main-image">
				<div class="name">
					<span>Алкоголь </span>
					<span>| Угадать: 2</span>
				</div>
				<b-row class="m-0 w-100">
					<b-col class="col-block">
						<div class="img-block">
							<img src="../assets/img/food/beer.png" alt="beer">
						</div>
						<div class="img-block question">
							<img src="../assets/img/elements/question.png" alt="scream">
						</div>
						<div class="img-block question">
							<img src="../assets/img/elements/question.png" alt="scream">
						</div>
					</b-col>
				</b-row>
			</div>

			<div class="main-image">
				<div class="name">
					<span>Еда </span>
					<span>| Угадать: 1</span>
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
						<div class="img-block question">
							<img src="../assets/img/elements/question.png" alt="scream">
						</div>
					</b-col>
				</b-row>
			</div>

			<div class="main-image">
				<div class="name">
					<span>Безалкогольные напитки </span>
					<span>| Угадать: 0</span>
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
					<span>| Угадать: 0</span>
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
	import MenuBlock from '../components/MenuBlock.vue';

	export default {
		name: 'Loss',
		components: {
			MenuBlock,
		},

		methods:{
			/* goToMessUser(){return this.$router.push('/message');}, */
			goToNextProfile(){return this.$router.push('/game');},
		},
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

		.success-main{
			background-image: url('../assets/img/background/fon_ishod.png');
			background-size: cover;
			background-repeat: no-repeat;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			padding: 20px 40px;
			margin-bottom: 10px;
			
			.title{
				font-size: 26px;
				font-weight: bolder;
				margin-bottom: 10px;

				@media screen and (min-width: 410px){
					font-size: 32px;
				}
			}

			.navigation{
				display: flex;
				align-items: center;
				justify-content: center;

				.view-profile, .next-profile{
					font-size: 16px;
					font-weight: bold;
					color: $bgMain;
					line-height: 18px;
					
					>span{cursor: pointer;}
					&.view-profile{margin-right: 30px;}
					&.next-profile{margin-left: 30px;}
					@media screen and (min-width: 410px){
						&.view-profile{margin-right: 50px;}
						&.next-profile{margin-left: 50px;}
					}
				}

				.premium{
					border-radius: 50%;
					background: $bgMain;
					position: relative;
					width: 50px;
					height: 50px;
					-webkit-box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.25);
					-moz-box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.25);
					box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.25);
					color: $fontColor;
					display: flex;
					align-items: center;
					justify-content: center;
					>span{margin-top: 5px;}

					@media screen and (min-width: 410px){
						width: 60px;
						height: 60px;
					}
					
					>img{
						width: 89%;
						position: absolute;
						top: 8px;
						left: 3px;
					}
				}
			}
		}

		.attemps{
			margin-bottom: 100px;
			padding: 0 15px;
			@media screen and (min-width: 410px){padding: 0 25px;}

			.name{
				margin-bottom: 5px;
				font-size: 14px;
				>span:last-of-type{color: $bgMain;}
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
					height: 65px;
					width: 65px;
					cursor: pointer;
					display: flex;
					align-items: center;
					&:not(:last-of-type){margin-right: 10px;}
					>img{width: inherit;}

					@media screen and (min-width: 410px){
						height: 80px;
						width: 80px;
					}

					&.question{
						justify-content: center;
						>img{
							width: 50px;
							height: 50px;
						}
					}
				}
			}
		}
	}
</style>
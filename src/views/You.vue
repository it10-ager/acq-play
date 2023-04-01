<template>
	<div class="story-container">

		<div class="registration">
			<span :class="{ active: isActive === 'me' }" @click="me('me')">Вы</span>
			<span :class="{ active: isActive === 'mutually' }" @click="mutually('mutually')">Взаимно</span>
			<span :class="{ active: isActive === 'you' }" @click="you('you')">Вас</span>
		</div>

		<!--If nothing content in dialog-->
		<!-- <div class="nothing text-center">
			<p>Тут пока никого нет...</p>
		</div>

		<b-row class="join d-flex justify-content-center my-2" @click="goToGame()">
			<b-col>
				<div class="next-block">
					<span class="w-100 text-center">Угадывать</span>
					<img src="../assets/img/elements/arrows-11.png" alt="arrow-right">
				</div>
			</b-col>
		</b-row> -->

		<div class="user-info">
			<div class="avatar-title">
				<div class="avatar">
					<img src="../assets/img/elements/user_avatar.png" alt="user">
				</div>

				<div class="attemps">
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
									<img src="../assets/img/elements/question.png" alt="question">
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
			</div>
		</div>

		<div class="user-info">
			<div class="avatar-title">
				<div class="avatar">
					<img src="../assets/img/elements/user_avatar.png" alt="user">
				</div>

				
				<div class="attemps">
					<div class="main-image">
						<div class="name">
							<span>Еда </span>
							<span>| Угадать: 4</span>
						</div>
						<b-row class="m-0 w-100">
							<b-col class="col-block">
								<div class="img-block question">
									<img src="../assets/img/elements/question.png" alt="question">
								</div>
								<div class="img-block question">
									<img src="../assets/img/elements/question.png" alt="question">
								</div>
								<div class="img-block question">
									<img src="../assets/img/elements/question.png" alt="question">
								</div>
								<div class="img-block question">
									<img src="../assets/img/elements/question.png" alt="question">
								</div>
							</b-col>
						</b-row>
					</div>

					<div class="main-image">
						<div class="name">
							<span>Безалкогольные напитки </span>
							<span>| Угадать: 2</span>
						</div>
						<b-row class="m-0 w-100">
							<b-col class="col-block">
								<div class="img-block question">
									<img src="../assets/img/elements/question.png" alt="question">
								</div>
								<div class="img-block question">
									<img src="../assets/img/elements/question.png" alt="question">
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
			</div>
		</div>

		<MenuBlock />
	</div>
</template>

<script>
	import MenuBlock from '../components/MenuBlock.vue';

	export default {
		name: 'You',
		components: {
			MenuBlock,
		},

		data(){
			return{
				isActive: 'you',
			}
		},

		methods: {
			me(action) {
				this.isActive = action;
				this.$router.push('/story');
			},

			mutually(action) {
				this.isActive = action;
				this.$router.push('/mutually');
			},

			you(action) {
				this.isActive = action;
				this.$router.push('/you');
			},

			goToGame(){
				this.$router.push('/game');
			}
		}
	};
</script>
  
<style scoped lang="scss">
	@import '../assets/extend';
	@import '../assets/vars';

	.story-container {
		@extend %mainWrapper;
		justify-content: flex-start;
		padding: 0;
		font-size: 18px;
		position: relative;
		max-width: inherit;

		.registration {
			display: flex;
			width: 90%;
			margin: 30px auto 20px;
			justify-content: space-between;
			align-items: center;
			border-radius: 50px;
			background: #fff;
			color: #b6b6b6;
			font-size: 14px;
			-webkit-box-shadow: 0px 1px 2px 0px rgb(187 187 187 / 72%);
			-moz-box-shadow: 0px 1px 2px 0px rgb(187 187 187 / 72%);
			box-shadow: 0px 1px 2px 0px rgb(187 187 187 / 72%);
			@media screen and (min-width: 410px){font-size: 16px;}

			span {
				display: inline-block;
				text-align: center;
				cursor: pointer;
				width: 100%;

				&.active {
					padding: 12px 20px;
					@extend %activeBtnBlack;
				}
			}
		}

		.user-info {
			display: flex;
			justify-content: space-between;
			border-top: 1px solid #6dc695;
			border-bottom: 1px solid #6dc695;
			padding: 10px 0;
			width: 90%;
			margin: 0 auto;
		
			&:nth-child(3){
				border: 0;
				margin-bottom: 100px;
			}
			
			&:nth-child(2){
				.avatar-title {
					.title {
						>span:last-of-type{
							color: #6dc695;
							text-decoration: underline;
							cursor: pointer;
						}
					}
				}
			}

			.avatar-title {
				display: flex;
				align-items: flex-start;

				.avatar {
					width: 50px;
					height: 50px;

					>img {
						width: inherit;
					}

					margin-right: 10px;
					border-radius: 50%;

					@media screen and (min-width: 410px) {
						width: 70px;
						height: 70px;
					}
				}

				.title {
					display: flex;
					flex-direction: column;
					font-size: 11px;
					line-height: 14px;

					@media screen and (min-width: 410px) {
						font-size: 14px;
						line-height: 17px;
					}

					>span:first-of-type {
						font-size: 14px;
						font-weight: bold;
						margin-bottom: 2px;

						@media screen and (min-width: 410px) {
							font-size: 18px;
						}
					}

					>span:last-of-type {
						color: #b6b6b6;
					}
				}
			}

			.attemps{
				.name{
					margin-bottom: 2px;
					font-size: 12px;
					>span:last-of-type{color: $bgMain}
					@media screen and (min-width: 410px){font-size: 14px;}
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
						height: 40px;
						width: 40px;
						cursor: pointer;
						display: flex;
						align-items: center;
						&:not(:last-of-type){margin-right: 10px;}
						>img{width: inherit;}

						@media screen and (min-width: 410px){
							height: 60px;
							width: 60px;
						}

						&.question{
							justify-content: center;
							>img{
								width: 30px;
								height: 30px;
							}
						}
					}
				}
			}
		}

		/* .nothing{
			width: 90%;
			margin: 10px auto 180px;
			border-top: 1px solid #6dc695;
			border-bottom: 1px solid #6dc695;
			padding: 20px 0;
			font-weight: bold;
			font-size: 20px;
			>p{margin: 0;}
			
			@media screen and (min-width: 410px){
				font-size: 24px;
				padding: 30px 0;
			}
		}

		.join {
			width: 90%;
			margin: 0 auto;
			.next-block {@extend %mainBtnNextPage;}
		} */
	}
</style>
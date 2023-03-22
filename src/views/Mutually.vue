<template>
	<div class="story-container">

		<div class="registration">
			<span :class="{ active: isActive === 'me' }" @click="me('me')">Вы</span>
			<span :class="{ active: isActive === 'mutually' }" @click="mutually('mutually')">Взаимно</span>
			<span :class="{ active: isActive === 'you' }" @click="you('you')">Вас</span>
		</div>

		<!--If nothing content in dialog-->
		<div class="coincidence text-center">
			<div class="avatar">
				<img src="../assets/img/background/man.png" alt="avatar">
			</div>
			<div class="percent">
				<span>78%</span>
				<span>Совпадение</span>
			</div>
			<div class="avatar">
				<img src="../assets/img/elements/user_avatar.png" alt="avatar">
			</div>
		</div>

		<div class="attemps">
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

		<b-row class="join d-flex justify-content-center my-2" @click="goToMessage()">
			<b-col>
				<div class="next-block">
					<span class="w-100 text-center">К переписке</span>
					<img src="../assets/img/elements/arrows-11.png" alt="arrow-right">
				</div>
			</b-col>
		</b-row>

		<MenuBlock />
	</div>
</template>

<script>
	import MenuBlock from '../components/MenuBlock.vue';

	export default {
		name: 'Mutually',
		components: {
			MenuBlock,
		},

		data(){
			return{
				isActive: 'mutually',
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

			goToMessage(){
				this.$router.push('/correspondence');
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
		max-width: 425px;

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

			@media screen and (min-width: 410px) {
				font-size: 16px;
			}

			span {
				display: inline-block;
				text-align: center;
				cursor: pointer;
				width: 100%;

				&.active {
					padding: 12px 20px;
					color: $fontColor;
					border-radius: 50px;
					background: $bgMain;
					-webkit-box-shadow: 0px 1px 2px 0px rgb(187 187 187 / 72%);
					-moz-box-shadow: 0px 1px 2px 0px rgb(187 187 187 / 72%);
					box-shadow: 0px 1px 2px 0px rgb(187 187 187 / 72%);
					transition: background 0.2s ease;
				}
			}
		}

		.coincidence{
			width: 90%;
			margin: 0 auto 10px;
			border-top: 1px solid #6dc695;
			border-bottom: 1px solid #6dc695;
			padding: 15px 20px;
			font-weight: bold;
			font-size: 36px;
			display: flex;
			color: $bgMain;
			justify-content: space-between;
			align-items: flex-start;

			>p{margin: 0;}
			
			@media screen and (min-width: 410px){
				font-size: 54px;
			}

			.percent{
				display: flex;
				flex-direction: column;
				align-items: center;
				line-height: 28px;
				>span:last-of-type{
					font-size: 12px;
					text-transform: uppercase;
				}

				@media screen and (min-width: 410px){
					line-height: 46px;
					>span:last-of-type{font-size: 14px;}
				}
			}

			.avatar {
				width: 50px;
				height: 50px;
				>img {width: inherit;}
				margin-right: 10px;
				border-radius: 50%;
				@media screen and (min-width: 410px) {
					width: 70px;
					height: 70px;
				}
			}
		}

		.attemps {
			width: 50%;
			margin: 0 auto 5px;
			.name {
				margin-bottom: 2px;
				font-size: 12px;

				@media screen and (min-width: 410px) {
					font-size: 14px;
				}
			}

			.main-image {
				display: flex;
				flex-direction: column;
				align-items: flex-start;
				margin-bottom: 5px;

				.col-block {
					width: 100%;
					display: flex;
					padding: 0 !important;

					&:not(:last-of-type) {
						margin-right: 10px;
					}
				}

				.img-block {
					background-color: #f1f1f1;
					border-radius: 10px;
					height: 40px;
					width: 40px;
					cursor: pointer;
					display: flex;
					align-items: center;

					&:not(:last-of-type) {
						margin-right: 10px;
					}

					>img {
						width: inherit;
					}

					@media screen and (min-width: 410px) {
						height: 60px;
						width: 60px;
					}

					&.question {
						justify-content: center;

						>img {
							width: 30px;
							height: 30px;
						}
					}
				}
			}
		}

		.join {
			width: 90%;
			margin: 0 auto;
			.next-block {
				@extend %mainBtnNextPage;
				margin-bottom: 180px;
			}
		}
	}
</style>
<template>
	<div class="user-container">
		
		<div class="users-photos first">
			<div class="another-photos">
				<div>
					<img src="../assets/img/background/around_user.png" alt="user">
				</div>
				<div>
					<img src="../assets/img/background/around_user.png" alt="user">
				</div>
			</div>
			<div class="main-photo">
				<img src="../assets/img/background/around_user.png" alt="user">
				<div class="user-info">
					<div class="info-txt">
						<p>Моё имя, 28</p>
						<p>Работаю в Корпорация</p>
						<p>Москва, знакомлюсь</p>
					</div>
				</div>
			</div>
		</div>
		
		<div class="users-photos second">
			<div class="another-photos">
				<div>
					<img src="../assets/img/background/around_timer_user.png" alt="user">
					<div class="timer">
						<p>23:59</p>
						<p>до поптыки</p>
					</div>
				</div>
				<div>
					<img src="../assets/img/background/around_user.png" alt="user">
				</div>
				<div>
					<img src="../assets/img/background/around_user.png" alt="user">
				</div>
			</div>

			<div class="another-photos">
				<div>
					<img src="../assets/img/background/around_user.png" alt="user">
				</div>
				<div>
					<img src="../assets/img/background/around_user.png" alt="user">
				</div>
				<div>
					<img src="../assets/img/background/around_user.png" alt="user">
				</div>
			</div>

			<div class="another-photos">
				<div>
					<img src="../assets/img/background/around_mess_user.png" alt="user">
					<div class="message">
						<div class="count">
							<img src="../assets/img/elements/messages.png" alt="message">
						</div>
						<span>Переписка</span>
					</div>
				</div>
				<div>
					<img src="../assets/img/background/around_user.png" alt="user">
				</div>
				<div>
					<img src="../assets/img/background/around_user.png" alt="user">
				</div>
			</div>
		</div>

		<!--Main block to next page-->
		<b-row class="search d-flex justify-content-center my-2" @click="showNewPhotos">
			<b-col>
				<div class="next-block">
					<span class="w-100 text-center">Расширенный поиск</span>
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
		name: 'Around',
		components: {
			MenuBlock,
		},

		data() {
			return {
				
			};
		},

		computed: {
			
		},

		methods: {
			showNewPhotos(){
				var second = document.querySelector('.second');
				second.style.display = 'flex';
				second.style.marginBottom = '80px';
				document.querySelector('.next-block').style.display = 'none';
			}
		}
	};
</script>
  
<style scoped lang="scss">
	@import '../assets/extend';
	@import '../assets/vars';

	.user-container{
		@extend %mainWrapper;
		justify-content: flex-start;
		max-width: inherit;
		
		.users-photos{
			display: flex;
			justify-content: space-between;
			margin-bottom: 20px;

			&.second{
				display: none;
				margin-bottom: 40px;
				.another-photos:last-of-type{margin-right: 0px;}
				.another-photos{
					>div{width: 100%;}
					&:nth-child(1){
						>div:nth-child(1){
							position: relative;
							.timer{
								display: flex;
								flex-direction: column;
								align-items: center;
								justify-content: center;
								position: absolute;
								bottom: 10px;
								left: 0;
								right: 0;
								color: $fontColor;
								
								>p{
									margin: 0;
									font-size: 12px;
									&:first-of-type{font-size: 22px;}
									@media screen and (min-width: 410px){
										font-size: 16px;
										&:first-of-type{font-size: 28px;}
									}
								}
							}
						}
					}

					&:nth-child(3){
						>div:nth-child(1){
							position: relative;
							.message{
								display: flex;
								flex-direction: column;
								align-items: center;
								justify-content: center;
								position: absolute;
								bottom: 10px;
								left: 0;
								right: 0;
								color: $fontColor;
								
								.count{
									>img{
										margin-bottom: 5px;
										width: 50px;
										@media screen and (min-width: 410px){width: 60px;}
									}
								}

								>span{
									margin: 0;
									font-size: 12px;
									@media screen and (min-width: 410px){font-size: 16px;}
								}
							}
						}
					}
				}
			}

			.another-photos{
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				margin-right: 10px;
				
				>div{
					width: 90px;
					&:not(:last-of-type){margin-bottom: 10px;}
					>img{
						width: 100%;
						border-radius: 8px;
					}
					@media screen and (min-width: 340px){width: 95px;}
					@media screen and (min-width: 350px){width: 100px;}
					@media screen and (min-width: 360px){width: 102px;}
					@media screen and (min-width: 370px){width: 105px;}
					@media screen and (min-width: 390px){width: 110px;}
					@media screen and (min-width: 410px){width: 120px;}
					@media screen and (min-width: 460px){width: 130px;}
					@media screen and (min-width: 490px){width: 140px;}
					@media screen and (min-width: 510px){width: 145px;}
					@media screen and (min-width: 535px){width: 155px;}
				}
			}

			.main-photo{
				width: 100%;
				position: relative;
				>img{
					width: inherit;
					border-radius: 8px;
				}

				.user-info{
					background: #fff;
					border: 1px solid #3cb371;
					border-radius: 10px;
					display: flex;
					align-items: center;
					-webkit-box-shadow: 0px 1px 2px 0px rgb(187 187 187 / 72%);
					-moz-box-shadow: 0px 1px 2px 0px rgb(187 187 187 / 72%);
					box-shadow: 0px 1px 2px 0px rgb(187 187 187 / 72%);
					font-size: 12px;
					width: 90%;
					position: absolute;
					bottom: 10px;
					left: 0;
					right: 0;
					margin: auto;
					padding: 10px;
					padding: 7px 15px;

					.info-txt{
						>p{
							margin: 0;
							&:first-of-type{
								font-weight: bold;
								font-size: 14px;
								
								>sup{
									font-size: 12px;
									font-weight: normal;
									color: $bgMain;
									cursor: pointer;
								}
							}
						}
					}
					
					@media screen and (min-width: 410px){
						
						padding: 10px 20px;
						.info-txt{
						margin-right: 30px;
							>p{
								font-size: 14px;
								&:first-of-type{
									font-size: 16px;
								}
							}
						}
					}
				}
			}
		}

		.search{
			.next-block {@extend %mainBtnNextPage;}
		}
	}
</style>
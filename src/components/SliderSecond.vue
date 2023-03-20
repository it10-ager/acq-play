<template>
	<div class="main-slider">
		<div class="slides">
			<!------1------>
			<div class="slide" :class="{ active: activeBlock === 1 }">
				<!--Title for page-->
				<div class="text-center title px-3">Загрузите 1 фото!</div>
				<div class="img-slide">
					<img src="../assets/img/background/bg_user.png" alt="user">
				</div>
				<div class="user-info" style="bottom: 20px;">
					<div class="info-txt">
						<p>Моё имя, 28 <sup>Расширить</sup></p>
						<p>Работаю в Корпорация</p>
						<p>Москва, знакомлюсь</p>
					</div>
					<div class="premium">
						<img src="../assets/img/elements/Ic_favorite_outline.png" alt="premium">
						<p>5</p>
					</div>
				</div>
			</div>

			<!------2------>
			<div class="slide" :class="{ active: activeBlock === 2 }">
				<div class="img-slide">
					<img src="../assets/img/background/photo_user.png" alt="user">
				</div>
				<div class="user-info">
					<div class="info-txt">
						<p>Моё имя, 28 <sup>Расширить</sup></p>
						<p>Работаю в Корпорация</p>
						<p>Москва, знакомлюсь</p>
					</div>
					<div class="premium">
						<img src="../assets/img/elements/Ic_favorite_outline.png" alt="premium">
						<p>5</p>
					</div>
				</div>
				<div class="user-settings mt-2">
					<span class="main" @click="selectForMain()">
						{{ makeMain }}
					</span>
					<span class="delete" :class="{ 'disabled': makeMain === 'Главная' }">{{ deletePhoto }}</span>
				</div>
			</div>

			<!------3------>
			<div class="slide" :class="{ active: activeBlock === 3 }">
				<div class="img-slide">
					<img src="../assets/img/background/photo_user.png" alt="user">
				</div>
				<div class="user-info">
					<div class="info-txt">
						<p>Моё имя, 28 <sup>Расширить</sup></p>
						<p>Работаю в Корпорация</p>
						<p>Москва, знакомлюсь</p>
					</div>
					<div class="premium">
						<img src="../assets/img/elements/Ic_favorite_outline.png" alt="premium">
						<p>5</p>
					</div>
				</div>
				<div class="user-settings mt-2">
					<span class="main" @click="selectForMain()">{{ makeMain }}</span>
					<span class="delete" :class="{ 'disabled': makeMain === 'Главная' }">{{ deletePhoto }}</span>
				</div>
			</div>

			<!------4------>
			<div class="slide" :class="{ active: activeBlock === 4 }">
				<div class="img-slide">
					<img src="../assets/img/background/photo_user.png" alt="user">
				</div>
				<div class="user-info">
					<div class="info-txt">
						<p>Моё имя, 28 <sup>Расширить</sup></p>
						<p>Работаю в Корпорация</p>
						<p>Москва, знакомлюсь</p>
					</div>
					<div class="premium">
						<img src="../assets/img/elements/Ic_favorite_outline.png" alt="premium">
						<p>5</p>
					</div>
				</div>
				<div class="user-settings mt-2">
					<span class="main" @click="selectForMain()">{{ makeMain }}</span>
					<span class="delete" :class="{ 'disabled': makeMain === 'Главная' }">{{ deletePhoto }}</span>
				</div>
			</div>

			<!------5------>
			<div class="slide" :class="{ active: activeBlock === 5 }">
				<div class="img-slide">
					<img src="../assets/img/background/photo_user.png" alt="user">
				</div>
				<div class="user-info">
					<div class="info-txt">
						<p>Моё имя, 28 <sup>Расширить</sup></p>
						<p>Работаю в Корпорация</p>
						<p>Москва, знакомлюсь</p>
					</div>
					<div class="premium">
						<img src="../assets/img/elements/Ic_favorite_outline.png" alt="premium">
						<p>5</p>
					</div>
				</div>
				<div class="user-settings mt-2">
					<span class="main" @click="selectForMain()">{{ makeMain }}</span>
					<span class="delete" :class="{ 'disabled': makeMain === 'Главная' }">{{ deletePhoto }}</span>
				</div>
			</div>

			<!------6------>
			<div class="slide" :class="{ active: activeBlock === 6 }">
				<div class="img-slide">
					<img src="../assets/img/background/photo_user.png" alt="user">
				</div>
				<div class="user-info">
					<div class="info-txt">
						<p>Моё имя, 28 <sup>Расширить</sup></p>
						<p>Работаю в Корпорация</p>
						<p>Москва, знакомлюсь</p>
					</div>
					<div class="premium">
						<img src="../assets/img/elements/Ic_favorite_outline.png" alt="premium">
						<p>5</p>
					</div>
				</div>
				<div class="user-settings mt-2">
					<span class="main" @click="selectForMain()">{{ makeMain }}</span>
					<span class="delete" :class="{ 'disabled': makeMain === 'Главная' }">{{ deletePhoto }}</span>
				</div>
			</div>
		</div>

		<div class="dot-btn">
			<span class="dot" :class="{ active: activeBlock === 1 }" @click="activeDot(1)"></span>
			<span class="dot" :class="{ active: activeBlock === 2 }" @click="activeDot(2)"></span>
			<span class="dot" :class="{ active: activeBlock === 3 }" @click="activeDot(3)"></span>
			<span class="dot" :class="{ active: activeBlock === 4 }" @click="activeDot(4)"></span>
			<span class="dot" :class="{ active: activeBlock === 5 }" @click="activeDot(5)"></span>
			<span class="dot" :class="{ active: activeBlock === 6 }" @click="activeDot(6)"></span>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				activeBlock: 1,
				makeMain: 'Сделать главным',
				deletePhoto: 'Удалить',
			}
		},
		methods: {
			activeDot(tab) {
				this.activeBlock = tab;
			},

			selectForMain(){
				this.makeMain = 'Главная';
				document.querySelector('.main').style.color = '#3cb371';
			}
		},
	};
</script>

<style scoped lang="scss">
	@import "../assets/extend";
	@import "../assets/vars";

	.main-slider{
		margin-bottom: 80px;
		position: relative;
		/* display: flex;
		justify-content: space-between;
		align-items: flex-end; */

		.slides{
			width: 100%;
			.slide{
				opacity: 0;
				transition: opacity 0.5s ease;
				display: none;
				position: relative;

				&.active{
					display: block;
					opacity: 1;
				}

				.title {
					position: absolute;
					top: 0;
					left: 0;
					right: 0;
					@extend %titleFont;
					font-size: 34px;
					@media screen and (min-width: 410px){font-size: 38px;}
				}

				.img-slide{
					display: flex;
					justify-content: center;
					>img{width: 100%;}
				}

				.user-info{
					background: #fff;
					border: 1px solid $bgMain;
					border-radius: 10px;
					display: flex;
					justify-content: center;
					align-items: center;
					box-shadow: 0px 1px 2px 0px rgb(187 187 187 / 72%);
					font-size: 14px;
					width: 280px;
					position: absolute;
					bottom: 45px;
					left: 0;
					right: 0;
					margin: auto;
					padding: 10px;
					padding: 7px 15px;

					.info-txt{
						margin-right: 30px;
						>p{
							margin: 0;
							&:first-of-type{
								font-weight: bold;
								font-size: 16px;
								
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
						width: 350px;
						padding: 10px 20px;
						.info-txt{
						margin-right: 30px;
							>p{
								font-size: 16px;
								&:first-of-type{
									font-size: 20px;
									>sup{font-size: 14px;}
								}
							}
						}
					}

					.premium{
						display: flex;
						align-items: center;
						justify-content: center;
						border-radius: 50%;
						width: 65px;
						height: 65px;
						background: $bgMain;
						position: relative;
						
						>p{
							margin: 5px 0 0 0;
							font-size: 16px;
							color: $fontColor;
						}
						
						>img{
							position: absolute;
							top: 12px;
							left: 7px;
							right: 0;
							width: 50px;
						}
					}
				}

				.user-settings{
					padding: 0 30px;
					display: flex;
					justify-content: space-between;
					font-size: 14px;
					@media screen and (min-width: 410px){font-size: 16px;}

					>span{
						cursor: pointer;
						&.main:hover{color: $bgMain;}
						&.delete{
							&.disabled {
 								color: gray;
  								pointer-events: none;
							}
						}
						&.delete:hover{color: $errorColor;}
					}
				}
			}
		}

		.dot-btn{
			display: flex;
			flex-direction: column;
			position: absolute;
			transform: rotate(180deg);
			top: 30%;
			left: 7%;

			.dot{
				width: 9px;
				height: 9px;
				background-color: #d1d1d1;
				border-radius: 50%;
				margin-bottom: 10px;
				cursor: pointer;
				&:hover{background-color: #59be86;}
				&.active{background-color: #339860;}
			}
		}
	}
</style>
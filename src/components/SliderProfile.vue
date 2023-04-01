<template>
	<div class="main-slider">
		<div class="slides">
			<!------1------>
			<div class="slide" :class="{ active: activeBlock === 1 }">
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
					<span class="main" :class="{ 'green': blocks[0].makeMain === 'Главная' }" @click="selectForMain(1)">{{ blocks[0].makeMain }}</span>
					<span class="delete" :class="{ 'disabled': blocks[0].makeMain === 'Главная' }">{{ blocks[0].deletePhoto }}</span>
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
					<span class="main" :class="{ 'green': blocks[1].makeMain === 'Главная' }" @click="selectForMain(2)">{{ blocks[1].makeMain }}</span>
					<span class="delete" :class="{ 'disabled': blocks[1].makeMain === 'Главная' }">{{ blocks[1].deletePhoto }}</span>
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
					<span class="main" :class="{ 'green': blocks[2].makeMain === 'Главная' }" @click="selectForMain(3)">{{ blocks[2].makeMain }}</span>
					<span class="delete" :class="{ 'disabled': blocks[2].makeMain === 'Главная' }">{{ blocks[2].deletePhoto }}</span>
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
					<span class="main" :class="{ 'green': blocks[3].makeMain === 'Главная' }" @click="selectForMain(4)">{{ blocks[3].makeMain }}</span>
					<span class="delete" :class="{ 'disabled': blocks[3].makeMain === 'Главная' }">{{ blocks[3].deletePhoto }}</span>
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
					<span class="main" :class="{ 'green': blocks[4].makeMain === 'Главная' }" @click="selectForMain(5)">{{ blocks[4].makeMain }}</span>
					<span class="delete" :class="{ 'disabled': blocks[4].makeMain === 'Главная' }">{{ blocks[4].deletePhoto }}</span>
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
					<span class="main" :class="{ 'green': blocks[5].makeMain === 'Главная' }" @click="selectForMain(6)">{{ blocks[5].makeMain }}</span>
					<span class="delete" :class="{ 'disabled': blocks[5].makeMain === 'Главная' }">{{ blocks[5].deletePhoto }}</span>
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
		name: 'SliderSecond',
		data() {
			return {
				activeBlock: 1,
				blocks: [
					{ makeMain: 'Сделать главным', deletePhoto: 'Удалить' },
					{ makeMain: 'Сделать главным', deletePhoto: 'Удалить' },
					{ makeMain: 'Сделать главным', deletePhoto: 'Удалить' },
					{ makeMain: 'Сделать главным', deletePhoto: 'Удалить' },
					{ makeMain: 'Сделать главным', deletePhoto: 'Удалить' },
					{ makeMain: 'Сделать главным', deletePhoto: 'Удалить' }
				],
			}
		},
		methods: {
			activeDot(tab) {
				this.activeBlock = tab;
			},

			selectForMain(blockIndex) {
				this.blocks[blockIndex - 1].makeMain = 'Главная';

				for (let i = 0; i < this.blocks.length; i++) {
					if (i !== blockIndex - 1) {
						this.blocks[i].makeMain = 'Сделать главным';
					}
				}
			}
		},
	};
</script>

<style scoped lang="scss">
	@import "../assets/extend";
	@import "../assets/vars";

	.main-slider{
		margin-bottom: 5%;
		position: relative;
		max-width: inherit;

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
					border: 1px solid rgb(83, 184, 128);
					border-radius: 10px;
					display: flex;
					justify-content: center;
					align-items: center;
					-webkit-box-shadow: 0px 1px 2px 0px rgb(187 187 187 / 72%);
					-moz-box-shadow: 0px 1px 2px 0px rgb(187 187 187 / 72%);
					box-shadow: 0px 1px 2px 0px rgb(187 187 187 / 72%);
					font-size: 14px;
					width: 85%;
					position: absolute;
					bottom: 55px;
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
					width: 85%;
					margin: 0 auto;
					display: flex;
					justify-content: space-between;
					@media screen and (min-width: 410px){font-size: 16px;}

					>span{
						cursor: pointer;
						&.main{
							&.green{color: #339860;}
						}
						&.main:hover{color: #339860;}
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
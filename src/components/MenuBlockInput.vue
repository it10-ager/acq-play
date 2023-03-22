<template>
	<div class="menu-block">
		<!--Input field-->
		<div class="message">
			<div class="field">
				<input class="input-text" type="text" placeholder="Введите сообщение ..."/>
			</div>
			<div class="message-settings">
				<div>
					<span>Прикрепить смайл</span>
					<span>Прикрепить фото</span>
				</div>
				<div>
					<span>Отправить</span>
				</div>
			</div>
		</div>

		<div class="menu">
			<!----Btn to page around---->
			<div class="menu-btn" @click="goToAroundPage">
				<div class="btn-img">
					<img src="../assets/img/elements/around.png" alt="around">
				</div>
				<div class="btn-title">Вокруг</div>
			</div>

			<!----Btn to page game---->
			<div class="menu-btn" @click="goToGamePage">
				<div class="btn-img">
					<img src="../assets/img/elements/game.png" alt="game">
				</div>
				<div class="btn-title">Игра</div>
			</div>

			<!----Btn to page dialog---->
			<div class="menu-btn" @click="goToDialogPage">
				<div class="btn-img">
					<img src="../assets/img/elements/dialog.png" alt="dialog">
				</div>
				<div class="btn-title">Диалоги</div>
			</div>

			<!----Btn to page story---->
			<div class="menu-btn" @click="goToStoryPage">
				<div class="btn-img">
					<img src="../assets/img/elements/story.png" alt="story">
				</div>
				<div class="btn-title">История</div>
			</div>

			<!----Btn to page settings---->
			<div class="menu-btn" @click="goToSettingsPage">
				<div class="btn-img">
					<img src="../assets/img/elements/settings.png" alt="settings">
				</div>
				<div class="btn-title">Настройки</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'MenuBlockInput',
		methods: {
			goToAroundPage(){this.$router.push('/around');},
			goToGamePage(){this.$router.push('/game');},
			goToDialogPage(){this.$router.push('/dialog');},
			goToStoryPage(){this.$router.push('/story');},
			goToSettingsPage(){this.$router.push('/my-profile');},
		},
	};
</script>

<style scoped lang="scss">
	@import "../assets/extend";
	@import "../assets/vars";

	.menu-block{
		position: fixed;
		bottom: 0;
		right: 0;
		left: 0;
		z-index: 10;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 0 auto;
		max-width: inherit;
		border-top: 1px solid #6dc695;
		
		.message{
			width: 100%;
			padding: 10px 20px 5px;
			background: #fff;
			display: flex;
			flex-direction: column;
			font-size: 16px;
			color: #b6b6b6;
			@media screen and (min-width: 410px){font-size: 18px;}

			.field{
				width: 100%;
				border-bottom: 1px solid #6dc695;
				color: #000;

				.input-text{
					width: inherit;
					outline: none;
					border: 0;
					padding: 5px 0 15px;
					&::placeholder{color:#b6b6b6;;}
				}
			}

			.message-settings{
				width: 100%;
				display: flex;
				padding: 10px 0;
				align-items: center;
				justify-content: space-between;
						
				>div{
					>span{
						cursor: pointer;
						font-size: 12px;
						@media screen and (min-width: 410px){font-size: 14px;}
						&:hover{color: #6dc695;}
					}
				}

				>div:first-of-type{
					width: 100%;
					>span:first-of-type{margin-right: 6%;}
				}
			}
		}

		.menu{
			padding: 10px 10px 5px;
			background: $bgMain;
			display: flex;
			width: 100%;
			.menu-btn{
				display: flex;
				flex-direction: column;
				align-items: center;
				width: 100%;
				font-size: 12px;
				cursor: pointer;
				color: $fontColor;

				.btn-img{
					>img{width: 35px;}
				}

				@media screen and (min-width: 410px){
					font-size: 14px;
					.btn-img{
						>img{width: 45px;}
					}
				}
			}
		}
	}
</style>
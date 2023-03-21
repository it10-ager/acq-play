<template>
	<div class="menu-block">
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
</template>

<script>
	export default {
		name: 'MenuBlock',
		methods: {
			goToAroundPage(){this.$router.push('/around');},
			goToGamePage(){this.$router.push('/game');},
			goToDialogPage(){this.$router.push('/dialog');},
			goToStoryPage(){this.$router.push('/story');},
			goToSettingsPage(){this.$router.push('/settings');},
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
		background: $bgMain;
		display: flex;
		align-items: center;
		margin: 0 auto;
		max-width: inherit;
		padding: 10px 10px 5px;
		
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
</style>
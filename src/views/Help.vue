<template>
	<div class="store-container">
		<div class="description key">
			<!--Title for page-->
			<div class="text-center title">
				Расскажите о проекте Вашим друзьям
				и получите 5 ключей!
			</div>

			<span>
				Помогите нам разнообразить игру!
				Просто поделитесь информацией о проекте со своими друзьями в социальных сетях
			</span>

			<div class="social-links">
				<a href="">
					<img src="../assets/img/elements/vk_icon.png" alt="">
				</a>
				<a href="">
					<img src="../assets/img/elements/logo_google_plus_icon.png" alt="">
				</a>
				<a href="">
					<img src="../assets/img/elements/vk_icon.png" alt="">
				</a>
				<a href="">
					<img src="../assets/img/elements/logo_google_plus_icon.png" alt="">
				</a>
			</div>
		</div>

		<MenuBlock />
	</div>
</template>

<script>
	import MenuBlock from '../components/MenuBlock.vue';

	export default {
		name: 'Help',
		components: {
			MenuBlock,
		},

		data(){
			return{}
		}
	}
</script>

<style scoped lang="scss">
	@import '../assets/extend';
	@import '../assets/vars';

	.store-container{
		@extend %mainWrapper;
		font-size: 14px;
		justify-content: flex-start;
		position: relative;
		max-width: inherit;
		@media screen and (min-width: 410px){font-size: 18px;}

		.description{
			border-radius: 10px;
			background-image: url('../assets/img/background/fon_info.png');
			background-size: cover;
			background-repeat: no-repeat;
			display: flex;
			flex-direction: column;
			justify-content: center;
			padding: 0 25px 20px;
			margin-bottom: 15px;

			.title {
				@extend %titleFont;
				margin: 15px 0 15px;
				font-size: 28px;
				@media screen and (min-width: 410px){font-size: 32px;}
				line-height: 37px;
			}

			>span{margin-bottom: 15px;}

			.social-links{
				display: flex;
				justify-content: center;

				>a{
					width: 60px;
					&:not(:last-of-type){margin-right: 2px;}
					>img{width: inherit;}
				}
			}
		}
	}
</style>
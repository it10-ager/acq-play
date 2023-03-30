<template>
	<div class="store-container">
		<div class="description key">
			<!--Title for page-->
			<div class="text-center title">Что такое "Ключ"?</div>

			<span>
				Это легкий способ открыть даже самый сложный профиль 
				не прикладывая усилий и не соблюдая таймаут
			</span>

			<b-row class="buy d-flex justify-content-center">
				<b-col class="col-block">
					<div class="buy-block">
						<span class="w-100 text-center">1 ключ за 59 руб.</span>
						<img src="../assets/img/elements/arrows-11.png" alt="arrow-right">
					</div>
				</b-col>
			</b-row>

			<b-row class="buy d-flex justify-content-center">
				<b-col class="col-block">
					<div class="buy-block">
						<span class="w-100 text-center">10 ключей за 490руб</span>
						<img src="../assets/img/elements/arrows-11.png" alt="arrow-right">
					</div>
				</b-col>
			</b-row>
		</div>

		<div class="description premium">
			<!--Title for page-->
			<div class="text-center title">Что такое "Премиум"?</div>
			
			<span>
				- Время таймаута 30 минут<br>
				- Возможность скрыть свой возраст<br>
				- Возможность писать без взаимности<br>
			</span>
			
			<b-row class="buy d-flex justify-content-center">
				<b-col class="col-block">
					<div class="buy-block">
						<span class="w-100 text-center">Премиум на 7 дней за 390 руб.</span>
						<img src="../assets/img/elements/arrows-11.png" alt="arrow-right">
					</div>
				</b-col>
			</b-row>

			<b-row class="buy d-flex justify-content-center">
				<b-col class="col-block">
					<div class="buy-block">
						<span class="w-100 text-center">Премиум на 30 дней за 990 руб.</span>
						<img src="../assets/img/elements/arrows-11.png" alt="arrow-right">
					</div>
				</b-col>
			</b-row>
		</div>

		<MenuBlock />
	</div>
</template>

<script>
	import MenuBlock from '../components/MenuBlock.vue';

	export default {
		name: 'Store',
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
		font-size: 12px;
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
			&.premium{margin-bottom: 150px;}

			.title {
				@extend %titleFont;
				margin: 15px 0 5px;
				font-size: 28px;
				@media screen and (min-width: 410px){font-size: 32px;}
			}

			>span{
				margin-bottom: 15px;
				padding: 0 5px;
			}

			.buy {
				width: 100%;
				margin: 0;
				.col-block{
					padding: 0!important;
					.buy-block{
						@extend %mainBtnNextPage;
						margin: 0 0 10px;
					}
				}
			}
		}
	}
</style>
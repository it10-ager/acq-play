<template>
	<div class="user-container">
		<SliderThird class="slider-third" />

		<div class="attemps mb-2">
			<span>Вам осталось угадать изображений: 6</span>
		</div>

		<b-row class="timer">
			<b-col class="col-block">
				<div class="timer-block">
					<span>23:59</span>
					<span>до следующей попытки</span>
				</div>
			</b-col>
		</b-row>

		<MenuBlock />
	</div>
</template>

<script>
	import SliderThird from '../components/SliderThird.vue';
	import MenuBlock from '../components/MenuBlock.vue';

	export default {
		name: 'Timer',
		components: {
			SliderThird,
			MenuBlock,
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

		.slider-third{margin-bottom: 2%;}

		.attemps{
			width: 90%;
			margin: 0 auto;
			font-size: 14px;
			@media screen and (min-width: 410px){font-size: 16px;}
		}

		.timer{
			margin: 0 auto 18%;
			-webkit-box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.25);
			-moz-box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.25);
			box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.25);
			background-image: -moz-linear-gradient(-60deg, #f1f1f1 55%, rgb(255, 255, 255) 150%);
			background-image: -webkit-linear-gradient(-60deg, #f1f1f1 55%, rgb(255, 255, 255) 150%);
			background-image: -ms-linear-gradient(-60deg, #f1f1f1 55%, rgb(255, 255, 255) 150%);
			background-image: linear-gradient(-60deg, #f1f1f1 55%, rgb(255, 255, 255) 150%);
			border-radius: 10px;
			padding: 15px 0 5px;
			width: 90%;
			line-height: 30px;

			@media screen and (min-width: 410px){padding: 20px 0 10px;}

			.col-block{
				padding: 0!important;

				.timer-block{
					display: flex;
					align-items: center;
					justify-content: center;
					flex-direction: column;

					>span:first-of-type{
						color: $bgMain;
						font-size: 30px;
						@media screen and (min-width: 410px){font-size: 36px;}
					}

					>span:last-of-type{
						font-size: 14px;
						@media screen and (min-width: 410px){font-size: 16px;}
					}
				}
			}
		}
	}
</style>
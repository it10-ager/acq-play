<template>
	<div class="store-container">
		<div class="description key">
			<!--Title for page-->
			<div class="text-center title">Правила пользования</div>

			<span>
				1. Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым. Это тестовый контент, который не должен нести никакого смысла, лишь показать наличие самого текста или продемонстрировать типографику в деле.
			</span>
			<span>
				2. Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым. Это тестовый контент, который не должен нести никакого смысла, лишь показать наличие самого текста или продемонстрировать типографику в деле.
			</span>
			<span>
				3. Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым. Это тестовый контент, который не должен нести никакого смысла, лишь показать наличие самого текста или продемонстрировать типографику в деле.
			</span>
			<span>
				4. Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым. Это тестовый контент, который не должен нести никакого смысла, лишь показать наличие самого текста или продемонстрировать типографику в деле.
			</span>
		</div>

		<MenuBlock />
	</div>
</template>

<script>
	import MenuBlock from '../components/MenuBlock.vue';

	export default {
		name: 'Rules',
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
		@media screen and (min-width: 410px){font-size: 16px;}

		.description{
			border-radius: 10px;
			background-image: url('../assets/img/background/fon_info.png');
			background-size: cover;
			background-repeat: no-repeat;
			display: flex;
			flex-direction: column;
			justify-content: center;
			padding: 0 25px 20px;
			margin-bottom: 100px;

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
		}
	}
</style>
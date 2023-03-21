<template>
	<div class="user-container">
		<SliderThird class="slider-third"/>
	
		<div class="attemps px-3 mb-1">
			<span>Вам осталось угадать изображений: 6</span>
		</div>

		

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
		max-width: 425px;

		.slider-third{margin-bottom: 20px;}
	}
</style>
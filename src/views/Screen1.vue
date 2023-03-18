<template>
	<div class="search-love">
		<!--bg img-->
		<div class="bg-image"></div>

		<!--Title for block-->
		<div class="text-center title">Найди любовь играя!</div>

		<SliderScreen1 />

		
	</div>
</template>

<script>
	import SliderScreen1 from '../components/SliderScreen1.vue'
	export default {
		name: 'screen1',
		components: {
			SliderScreen1,
		},
		data() {
			return {
				
			}
		},
	};
</script>

<style scoped lang="scss">
	@import '../assets/extend';
	@import '../assets/vars';

	.search-love{
		@extend %mainWrapper;
		.bg-image {@extend %backgroundImg;}
		.title {@extend %titleFont;}


	}
</style>
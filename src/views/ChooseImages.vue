<template>
	<div class="language-select">
		<!--Title for page-->
		<div class="text-center title">Выберите от 1 картинки</div>
		
		

		<!--Main block to next page-->
		<b-row class="join d-flex justify-content-center my-2">
			<b-col>
				<div class="next-block">
					<span class="w-100 text-center">Далее</span>
					<img src="../assets/img/elements/arrows-11.png" alt="arrow-right">
				</div>
			</b-col>
		</b-row>
	</div>
</template>
  
<script>
	export default {
		name: 'ChooseImages',
		data() {
			return {
			
			};
		},

		methods: {
	
		}
	};
</script>
  
<style scoped lang="scss">
	@import '../assets/extend';
	@import '../assets/vars';
	
	.images-select {
		@extend %mainWrapper;
		.title {@extend %titleFont;}
	}
</style>
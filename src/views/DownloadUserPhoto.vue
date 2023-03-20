<template>
	<div class="user-container">
		<SliderSecond />
	
		<div class="px-3 mb-4">
			<!--Download Block-->
			<b-row class="join d-flex justify-content-center my-2">
				<b-col>
					<div class="next-block photo-download">
						<span class="w-100 text-center">Загрузить фото</span>
						<img src="../assets/img/elements/arrows-11.png" alt="arrow-right">
					</div>
				</b-col>
			</b-row>

			<!--Main block to next page-->
			<b-row class="join d-flex justify-content-center my-2" @click="goToGuessImages()">
				<b-col>
					<div class="next-block">
						<span class="w-100 text-center">Далее</span>
						<img src="../assets/img/elements/arrows-11.png" alt="arrow-right">
					</div>
				</b-col>
			</b-row>
		</div>
	</div>
</template>
  
<script>
	import SliderSecond from '@/components/SliderSecond.vue';

	export default {
		name: 'DownloadUserPhoto',

		components: {
			SliderSecond,
		},

		data() {
			return {
				
			};
		},

		methods: {
			goToGuessImages(){this.$router.push('/guess-images');}
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
		
		.join {
			.photo-download{margin-bottom: 10px;}
			.next-block {@extend %mainBtnNextPage;}
		}
	}
</style>